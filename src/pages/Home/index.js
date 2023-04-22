import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollViewWrapper from "../../fragments/ScrollWrapper";
import { getRecipeCount, getRecipeList } from "../../api/recipe.api";
import { recipeAdded } from "../Recipe/recipeSlice";
import RecipeList from "../../components/RecipeList";

export default function Home({ navigation }) {
  const [recipeCount, setRecipeCount] = useState(null);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    async function fetchData() {
      const recipeCountRes = await getRecipeCount();
      setRecipeCount(recipeCountRes.count);
      const recipeListRes = await getRecipeList(page * 10, 10);
      recipeListRes.forEach((recipe) => dispatch(recipeAdded(recipe)));
    }
    fetchData();
  }, [page]);

  const handleRecipePress = (recipeId) => {
    navigation.navigate("Recipe", { recipeId });
  };

  const renderRecipeItem = (recipe) => {
    const description = recipe.description.split(" ").splice(0, 10).join(" ");
    const sourceUri =
      "http://192.168.1.151:3000/uploads/images/" + recipe.source;

    return (
      <RecipeList.Item
        key={recipe.id}
        recipe={recipe}
        description={description}
        imageUri={sourceUri}
        handleRecipePress={handleRecipePress}
      />
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(recipeCount / 10);

    return (
      <RecipeList.Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    );
  };

  return (
    <ScrollViewWrapper navigation={navigation}>
      <RecipeList>
        {recipes && Object.values(recipes).map(renderRecipeItem)}
        {recipeCount && renderPagination()}
      </RecipeList>
    </ScrollViewWrapper>
  );
}
