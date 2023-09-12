import { createSlice } from "@reduxjs/toolkit";
import { getNewArrivalProducts } from "../thunkActions/productsActions";


const initialState = {
  newArrivalProducts: [],
  isLoading: [],
  error: null,
}

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getNewArrivalProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.fulfilled, (state, action) => {
      state.newArrivalProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = ProductsSlice.actions;

export default ProductsSlice.reducer;