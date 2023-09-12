import { store } from "@/redux/store";
import { getAllCategories } from "@/redux/thunkActions/categoriesActions";


const useCategories = async () => {

  // console.log("----------1-----------");
  await store.dispatch(getAllCategories());
  // console.log("----------2-----------");

  const { categories, isLoading, error } = await store.getState().CategoriesSlice;

  // console.log("----------3-----------");
  console.log("categories:", categories);

  return [categories, isLoading];
}

export default useCategories;