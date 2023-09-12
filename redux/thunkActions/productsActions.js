import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "@/hooks/fetchDataHook/useGetData";
import { resetSate } from "../slices/CategoriesSlice";


export const getNewArrivalProducts = createAsyncThunk("products/getNewArrivalProducts", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/api/new-arrival-products`);
    console.log("res-new-arrival-products:", res);
    return res.data.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
