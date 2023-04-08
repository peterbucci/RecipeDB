import { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import TextInputComponent from "../../components/AddARecipe/Form";

export default function Ingredients({ ingredientsList, addToRecipe }) {
  const [newIngredient, setNewIngredient] = useState(null);
  return (
    <>
      {ingredientsList.map(({ amount, measurement, name }, i) => {
        return <Text key={i}>{amount + " " + measurement + " " + name}</Text>;
      })}
      <View>
        {newIngredient && (
          <>
            <TextInputComponent
              label="Amount"
              onChangeText={(val) =>
                setNewIngredient((prev) => ({ ...prev, amount: val }))
              }
              value={newIngredient.amount}
            />
            <TextInputComponent
              label="measurement"
              onChangeText={(val) =>
                setNewIngredient((prev) => ({ ...prev, measurement: val }))
              }
              value={newIngredient.measurement}
            />
            <TextInputComponent
              label="name"
              onChangeText={(val) =>
                setNewIngredient((prev) => ({ ...prev, name: val }))
              }
              value={newIngredient.name}
            />
          </>
        )}
        <TouchableWithoutFeedback
          onPress={() => {
            if (newIngredient) addToRecipe(newIngredient);
            setNewIngredient({ name: "", measurement: "", amount: "" });
          }}
        >
          <Text>{newIngredient ? "Add" : "New Ingredient"}</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
