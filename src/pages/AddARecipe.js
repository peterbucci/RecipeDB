import { useReducer } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Button,
} from "react-native";
import { addRecipe } from "../api/recipe.api";
import ScrollViewWrapper from "../fragments/ScrollWrapper";

function reducer(state, action) {
  const { type, ...restAction } = action;
  switch (type) {
    case "UPDATE_TEXTINPUT":
      return { ...state, ...restAction };
    case "RESET_FORM":
      return { name: "", description: "" };
    default:
      return state;
  }
}

export default function AddARecipe({ navigation }) {
  const [state, dispatch] = useReducer(reducer, { name: "", description: "" });

  return (
    <ScrollViewWrapper navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Recipe</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) =>
              dispatch({ type: "UPDATE_TEXTINPUT", name: value })
            }
            value={state.name}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLabel}>Description</Text>
          <TextInput
            style={{ ...styles.textInput, ...styles.textInputMultiline }}
            onChangeText={(value) =>
              dispatch({ type: "UPDATE_TEXTINPUT", description: value })
            }
            value={state.description}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Create"
              color="#40513B"
              accessibilityLabel="Create Recipe"
              onPress={async () => {
                const res = await addRecipe({
                  ...state,
                  user_id: 1,
                });
                navigation.navigate("Recipe", {
                  recipeId: res.id,
                });
              }}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Clear"
              color="#40513B"
              accessibilityLabel="Clear Recipe"
              onPress={() => dispatch({ type: "RESET_FORM" })}
            />
          </View>
        </View>
      </View>
    </ScrollViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: "center", margin: 10 },
  headerText: {
    fontSize: 20,
  },
  textInputContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
    borderBottomWidth: 2,
    borderColor: "#9DC08B",
    backgroundColor: "#ffffff",
  },
  textInputLabel: {
    fontSize: 12,
  },
  textInput: {
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
    ...{},
  },
  textInputMultiline: {
    textAlignVertical: "top",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  buttonWrapper: { flex: 1, marginHorizontal: 5 },
});
