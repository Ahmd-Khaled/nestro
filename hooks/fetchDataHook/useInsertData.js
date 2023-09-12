import baseUrl from "./baseUrl";

const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  const res = await baseUrl.post(url, params, config);
  // return res.data;
  // console.log("useInsertDataWithImage response: ", res.status);
  return res;
}

const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  const res = await baseUrl.post(url, params);
  // const res = await baseUrl.post(url, params, config);
  return res;
}

export { useInsertDataWithImage, useInsertData };