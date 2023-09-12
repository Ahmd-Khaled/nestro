import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import CategoriesSlice from "./slices/CategoriesSlice";

export const store = configureStore({
  reducer: {
    ProductsSlice: ProductsSlice,
    CategoriesSlice: CategoriesSlice,
  },
  devTools: true,
})
