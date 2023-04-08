import TextInputComponent from "../../components/AddARecipe/Form";

export default function BasicDetails({ dispatch, state }) {
  const onChangeText = (key, value) =>
    dispatch({ type: "UPDATE_INPUT", [key]: value });

  return (
    <>
      <TextInputComponent
        label="Name"
        onChangeText={(value) => onChangeText("name", value)}
        value={state.name}
      />
      <TextInputComponent
        label="Description"
        onChangeText={(value) => onChangeText("description", value)}
        value={state.description}
        numberOfLines={4}
      />
    </>
  );
}
