import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from ".";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
