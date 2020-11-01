import axios from "axios";

export const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const productData = () => {
  let PRODUCT_ENDPOINT = "http://localhost:4600/api/allproducts";
  return axios.get(PRODUCT_ENDPOINT, config);
};

export const productDataById = (id) => {
  let PRODUCT_ENDPOINT = `http://localhost:4600/api/product/${id}`;
  return axios.get(PRODUCT_ENDPOINT, config);
};

export const productOffer = () => {
  let PRODUCT_OFFER = "http://localhost:4600/api/offerproduct";
  return axios.get(PRODUCT_OFFER, config);
};

export const addProduct = (data) => {
  let NEW_PRODUCT = "http://localhost:4600/api/addproduct";
  return axios.post(NEW_PRODUCT, JSON.stringify(data), config);
};

export const updateProduct = (id, data) => {
  let UPDATE_PRODUCT = `http://localhost:4600/api/updateproduct/${id}`;
  return axios.put(UPDATE_PRODUCT, JSON.stringify(data), config);
};
