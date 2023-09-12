import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../thunkActions/categoriesActions";


const initialState = {
  categories: [],
  isLoading: [],
  error: null,
}

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
      // console.log("---------6--------(state.categories):", state.categories)
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;