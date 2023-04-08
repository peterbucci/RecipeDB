import { useReducer, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { addRecipe } from "../../api/recipe.api";
import AddARecipeComponent from "../../components/AddARecipe";
import ImagePickerComponent from "../../fragments/ImagePicker";
import ScrollViewWrapper from "../../fragments/ScrollWrapper";
import BasicDetails from "./BasicDetails";
import Ingredients from "./Ingredients";
import Notes from "./Notes";
import Steps from "./Steps";

const sections = [
  "Basic Details",
  "Featured Image",
  "Ingredients",
  "Steps",
  "Notes",
];

function reducer(state, action) {
  const { type, ...restAction } = action;
  switch (type) {
    case "ADD_TO_ARRAY":
      const { key, value } = restAction;
      return { ...state, [key]: [...state[key], value] };
    case "UPDATE_INPUT":
      return { ...state, ...restAction };
    case "RESET_FORM":
      return { name: "", description: "" };
    default:
      return state;
  }
}

export default function AddARecipe({ navigation }) {
  const enterDirection = useSharedValue(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    description: "",
    image: null,
    ingredients: [],
    steps: [],
    notes: [],
  });

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
    dispatch({ type: "UPDATE_INPUT", image: uri });
  };

  const addToArray = (key, value) => {
    dispatch({ type: "ADD_TO_ARRAY", key, value });
  };

  const onSubmit = async () => {
    const res = await addRecipe({
      ...state,
      user_id: 1,
    });
    navigation.navigate("Recipe", {
      recipeId: res.id,
    });
  };

  const onClear = () => dispatch({ type: "RESET_FORM" });

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
                <BasicDetails dispatch={dispatch} state={state} />
              ) : i === 1 ? (
                <ImagePickerComponent onPick={pickImage} />
              ) : i === 2 ? (
                <Ingredients
                  ingredientsList={state.ingredients}
                  addToRecipe={(ingredient) =>
                    addToArray("ingredients", ingredient)
                  }
                />
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
