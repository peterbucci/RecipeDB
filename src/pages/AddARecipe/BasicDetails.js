import { useDispatch, useSelector } from "react-redux";
import TextInputComponent from "../../components/AddARecipe/Form";
import { addARecipeActions } from "../../store/";
const { updateName, updateDescription } = addARecipeActions;

export default function BasicDetails() {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.addARecipe);

  return (
    <>
      <TextInputComponent
        label="Name"
        onChangeText={(value) => dispatch(updateName(value))}
        value={recipe.name}
      />
      <TextInputComponent
        label="Description"
        onChangeText={(value) => dispatch(updateDescription(value))}
        value={recipe.description}
        numberOfLines={4}
      />
    </>
  );
}
