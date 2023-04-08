import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { getRecipeCount, getRecipeList } from "../api/recipe.api";
import ScrollViewWrapper from "../fragments/ScrollWrapper";
import SearchBarComponent from "../fragments/SearchBar";

export default function Home({ navigation }) {
  const [recipes, setRecipes] = useState(null);
  const [recipeCount, setRecipeCount] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getRecipeCount().then((res) => {
      setRecipeCount(res.count);
    });
    getRecipeList(page * 10, 10).then((res) => {
      setRecipes(res);
    });
  }, [page]);

  return (
    <ScrollViewWrapper navigation={navigation}>
      <View style={styles.container}>
        {recipes &&
          recipes.map((recipe) => {
            const description = recipe.description
              .split(" ")
              .splice(0, 10)
              .join(" ");
            return (
              <View key={recipe.id} style={styles.item}>
                {recipe.source && (
                  <Image
                    source={{
                      uri:
                        "http://192.168.1.151:3000/uploads/images/" +
                        recipe.source,
                    }}
                    style={styles.image}
                  />
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
        {recipeCount && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              margin: 10,
            }}
          >
            {page !== 0 && (
              <Text
                style={{ ...styles.paginationText, marginRight: 5 }}
                onPress={() => setPage(page - 1)}
              >
                Previous
              </Text>
            )}
            <Text style={styles.paginationText}>
              {page + 1} of {Math.ceil(recipeCount / 10)}
            </Text>
            {page !== Math.ceil(recipeCount / 10) - 1 && (
              <Text
                style={{ ...styles.paginationText, marginLeft: 5 }}
                onPress={() => setPage(page + 1)}
              >
                Next
              </Text>
            )}
          </View>
        )}
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
