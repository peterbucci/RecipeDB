import { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TextInputComponent from "../../components/AddARecipe/Form";
import { addARecipeActions } from "../../store/";
const { addIngredient, updateIngredient } = addARecipeActions;

export default function Ingredients() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.addARecipe.ingredients);
  const [ingredientToEdit, setIngredientToEdit] = useState(-1);

  return (
    <>
      {ingredients.map(({ amount, measurement, name }, i) => {
        return i === ingredientToEdit ? (
          <>
            <TextInputComponent
              label="Amount"
              onChangeText={(val) =>
                dispatch(
                  updateIngredient({ index: i, key: "amount", value: val })
                )
              }
              value={amount}
            />
            <TextInputComponent
              label="measurement"
              onChangeText={(val) =>
                dispatch(
                  updateIngredient({ index: i, key: "measurement", value: val })
                )
              }
              value={measurement}
            />
            <TextInputComponent
              label="name"
              onChangeText={(val) =>
                dispatch(
                  updateIngredient({ index: i, key: "name", value: val })
                )
              }
              value={name}
            />
          </>
        ) : (
          <Text key={i}>{amount + " " + measurement + " " + name}</Text>
        );
      })}
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(addIngredient());
            setIngredientToEdit(ingredients.length);
          }}
        >
          <Text>{ingredientToEdit > -1 ? "Add" : "New Ingredient"}</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
