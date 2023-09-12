import baseUrl from "./baseUrl";

export const useGetData = async (url) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'api_password': process.env.API_PASSWORD,
      'language': 'ar',
      'Authorization': process.env.API_TOKEN
    }
  }

  const res = await baseUrl.get(url, config);
  return res.data;
}

// export const useGetData = async (url, params) => {

//   const res = await baseUrl.get(url, params);
//   return res.data;
// }


// export const useGetDataToken = async (url, params) => {
//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//   };

//   const res = await baseUrl.get(url, config);
//   return res.data;
// }

