import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {},
  reducers: {
    recipeAdded: (state, action) => {
      state[action.payload.id] = action.payload;
    },
  },
});

export const { recipeAdded } = recipesSlice.actions;

export default recipesSlice.reducer;
