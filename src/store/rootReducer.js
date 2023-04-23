import { configureStore } from "@reduxjs/toolkit";
import { addARecipeReducer, recipesReducer } from ".";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    addARecipe: addARecipeReducer,
  },
});
