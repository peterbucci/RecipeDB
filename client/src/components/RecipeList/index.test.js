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

  it("has 1 child", () => {
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

  it("should display the pagination correctly", () => {
    const page = 1;
    const totalPages = 5;
    const setPage = jest.fn();
    const { getByText, queryByTestId } = render(
      <RecipeList.Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    );
    const paginationPrevious = queryByTestId("pagination-previous");
    const paginationText = getByText(`${page + 1} of ${totalPages}`);
    const paginationNext = queryByTestId("pagination-next");
    expect(paginationPrevious).toBeTruthy();
    expect(paginationText).toBeTruthy();
    expect(paginationNext).toBeTruthy();
  });

  it("should not display the previous button if page equals 0", () => {
    const page = 0;
    const totalPages = 5;
    const setPage = jest.fn();
    const { queryByTestId } = render(
      <RecipeList.Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    );
    const paginationPrevious = queryByTestId("pagination-previous");
    expect(paginationPrevious).toBe(null);
  });

  it("should not display the next button if page equals totalPages - 1", () => {
    const page = 4;
    const totalPages = 5;
    const setPage = jest.fn();
    const { queryByTestId } = render(
      <RecipeList.Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    );
    const paginationNext = queryByTestId("pagination-next");
    expect(paginationNext).toBe(null);
  });
});
