import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "@/hooks/fetchDataHook/useGetData";
import { resetSate } from "../slices/CategoriesSlice";


export const getAllCategories = createAsyncThunk("categories/getAllCategories", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  // console.log("----------4-----------");

  try {
    const res = await useGetData(`/api/categories`);
    // console.log("----------5-----------reponse returned------");
    console.log("res-categories:", res);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

