import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./pages/Recipe/recipeSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
