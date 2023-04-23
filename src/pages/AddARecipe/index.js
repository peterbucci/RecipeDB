import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { addARecipeActions } from "../../store/";
import { addRecipe } from "../../api/recipe.api";
import AddARecipeComponent from "../../components/AddARecipe";
import ImagePickerComponent from "../../fragments/ImagePicker";
import ScrollViewWrapper from "../../fragments/ScrollWrapper";
import BasicDetails from "./BasicDetails";
import Ingredients from "./Ingredients";
import Notes from "./Notes";
import Steps from "./Steps";

const { updateImage, resetForm } = addARecipeActions;

const sections = [
  "Basic Details",
  "Featured Image",
  "Ingredients",
  "Steps",
  "Notes",
];

export default function AddARecipe({ navigation }) {
  const enterDirection = useSharedValue(null);
  const [currentSection, setCurrentSection] = useState(0);
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.addARecipe);

  const headerButtonDisabled = (direction) => {
    return direction === "left"
      ? currentSection === 0
      : currentSection === sections.length - 1;
  };

  const headerButtonOnPress = (direction) => {
    enterDirection.value = direction;
    setCurrentSection((prev) => (direction === "left" ? prev - 1 : prev + 1));
  };

  const pickImage = (uri) => {
    dispatch(updateImage(uri));
  };

  const onSubmit = async () => {
    const res = await addRecipe({
      ...recipe,
      user_id: 1,
    });
    navigation.navigate("Recipe", {
      recipeId: res.id,
    });
  };

  const onClear = () => dispatch(resetForm());

  return (
    <ScrollViewWrapper navigation={navigation}>
      <AddARecipeComponent>
        <AddARecipeComponent.Header
          currentSection={sections[currentSection]}
          buttonDisabled={headerButtonDisabled}
          buttonOnPress={headerButtonOnPress}
        />
        {sections.map((_, i) => {
          return currentSection === i ? (
            <AddARecipeComponent.Body enterDirection={enterDirection} key={i}>
              {i === 0 ? (
                <BasicDetails />
              ) : i === 1 ? (
                <ImagePickerComponent onPick={pickImage} />
              ) : i === 2 ? (
                <Ingredients />
              ) : i === 3 ? (
                <Steps />
              ) : (
                <Notes />
              )}
            </AddARecipeComponent.Body>
          ) : null;
        })}
        <AddARecipeComponent.Footer onSubmit={onSubmit} onClear={onClear} />
      </AddARecipeComponent>
    </ScrollViewWrapper>
  );
}
