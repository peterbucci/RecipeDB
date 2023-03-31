import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { getRecipeList } from "../api/recipe.api";
import ScrollViewWrapper from "../fragments/ScrollWrapper";
import SearchBarComponent from "../fragments/SearchBar";

export default function Home({ navigation }) {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    getRecipeList(0, 10).then((res) => {
      setRecipes(res);
    });
  }, []);

  return (
    <ScrollViewWrapper navigation={navigation}>
      <SearchBarComponent />
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("AddARecipe");
            }}
          >
            <Text>Add A Recipe</Text>
          </TouchableWithoutFeedback>
        </View>
        {recipes &&
          recipes.map((recipe) => {
            const description = recipe.description
              .split(" ")
              .splice(0, 10)
              .join(" ");
            return (
              <View key={recipe.id} style={styles.item}>
                {recipe.source && (
                  <Image source={{ uri: recipe.source }} style={styles.image} />
                )}
                <View style={styles.itemRight}>
                  <Text>Recipes</Text>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("Recipe", {
                        recipeId: recipe.id,
                      });
                    }}
                  >
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                  </TouchableWithoutFeedback>
                  <Text>{description}...</Text>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollViewWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  item: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    marginRight: 10,
    height: undefined,
    maxHeight: 200,
    aspectRatio: 1,
  },
  itemRight: {
    flex: 2,
  },
  recipeName: {
    fontFamily: "Noticia Text",
    fontSize: 22,
  },
});
