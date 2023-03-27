import { useEffect, useState } from "react";
import RecipeLayout from "~/components/Recipe/";
import ScrollViewWrapper from "~/fragments/ScrollWrapper";
import DropdownComponent from "~/fragments/DropdownMenu";
import Spinner from "~/fragments/Spinner";

const menuData = [
  { label: "Photo", value: "1" },
  { label: "Description", value: "2" },
  { label: "Ingredients", value: "3" },
  { label: "Steps", value: "4" },
  { label: "Notes", value: "5" },
  { label: "Conversation", value: "6" },
];

const getData = async (recipeId) => {
  try {
    let res = await fetch(`http://192.168.1.165:3000/recipe/${recipeId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

export default function Recipe({ route }) {
  const [fetching, setFetching] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [visibleSections, setVisibleSections] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);
  const { recipeId } = route.params;

  useEffect(() => {
    if (!recipe) return;
    setFeaturedImage(
      recipe.images.find(({ id }) => id === recipe.featuredImageId)
    );
  }, [recipe]);

  useEffect(() => {
    getData(recipeId).then((res) => {
      setRecipe(res);
      setFetching(false);
    });
  }, []);

  return (
    <ScrollViewWrapper>
      {fetching ? (
        <Spinner />
      ) : recipe.id ? (
        <RecipeLayout recipe={recipe}>
          <DropdownComponent
            data={menuData}
            externalValues={visibleSections}
            setExternalValues={setVisibleSections}
          />
          {visibleSections.indexOf("1") >= 0 && featuredImage && (
            <RecipeLayout.Photo {...featuredImage} />
          )}
          {visibleSections.indexOf("2") >= 0 && (
            <RecipeLayout.Description text={recipe.description} />
          )}
          {visibleSections.indexOf("3") >= 0 && (
            <RecipeLayout.Ingredients ingredients={recipe.ingredients} />
          )}
          {visibleSections.indexOf("4") >= 0 && (
            <RecipeLayout.Steps steps={recipe.steps} />
          )}
          {visibleSections.indexOf("5") >= 0 && (
            <RecipeLayout.Notes notes={recipe.notes} />
          )}
        </RecipeLayout>
      ) : (
        <RecipeLayout.NoRecipeFound />
      )}
    </ScrollViewWrapper>
  );
}
