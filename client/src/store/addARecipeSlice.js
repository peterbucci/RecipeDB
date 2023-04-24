import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  image: null,
  ingredients: [],
  steps: [],
  notes: [],
};

const newIngredient = {
  name: "",
  measurement: "",
  amount: "",
};

const addARecipeSlice = createSlice({
  name: "addARecipe",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    addIngredient: (state) => {
      state.ingredients = [...state.ingredients, newIngredient];
    },
    updateIngredient: (state, action) => {
      const { index, key, value } = action.payload;
      state.ingredients[index][key] = value;
    },
    deleteIngredient: (state, action) => {
      const { index } = action.payload;
      state.ingredients = state.ingredients.filter((_, i) => i !== index);
    },
    resetForm: () => initialState,
  },
});

export const { actions, reducer } = addARecipeSlice;
