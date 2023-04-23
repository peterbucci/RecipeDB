import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";
import RecipeList from ".";

describe("RecipeList", () => {
  const recipe = {
    id: 1,
    name: "Test Recipe",
    description: "Test Description",
  };
  const handleRecipePress = jest.fn();

  const tree = renderer
    .create(
      <RecipeList>
        <RecipeList.Item
          recipe={recipe}
          description={recipe.description}
          handleRecipePress={handleRecipePress}
        />
      </RecipeList>
    )
    .toJSON();

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("should call handleRecipePress when a recipe is clicked", () => {
    const { getByTestId } = render(
      <RecipeList>
        <RecipeList.Item
          recipe={recipe}
          description={recipe.description}
          handleRecipePress={handleRecipePress}
        />
      </RecipeList>
    );
    const recipeItem = getByTestId("recipe-link");
    fireEvent.press(recipeItem);
    expect(handleRecipePress).toHaveBeenCalledWith(recipe.id);
  });
});
