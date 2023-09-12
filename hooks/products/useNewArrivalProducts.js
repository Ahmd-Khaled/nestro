import { store } from "@/redux/store";
import { getNewArrivalProducts } from "@/redux/thunkActions/productsActions";


const useNewArrivalProducts = async () => {

  await store.dispatch(getNewArrivalProducts());

  const { newArrivalProducts, isLoading, error } = await store.getState().ProductsSlice;

  console.log("newArrivalProducts:", newArrivalProducts);

  return [newArrivalProducts, isLoading, error];
}

export default useNewArrivalProducts




















// import axios from "axios";

// const useNewArrivalProducts = async () => {

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'api_password': process.env.API_PASSWORD,
//       'language': 'ar',
//       'Authorization': process.env.API_TOKEN
//     }
//   }

//   const response = await axios.get("https://nestrettocoffee.com/dashboard/api/new-arrival-products", config);

//   let newArrivalProducts = [];
//   if (response) {
//     if (response.data) {
//       newArrivalProducts = response.data.data;
//     console.log("response.data.data:======================================", response.data.data)
//     }
//   }

//   return [newArrivalProducts];
// }
// export default useNewArrivalProducts;