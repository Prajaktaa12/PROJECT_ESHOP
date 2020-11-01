import { LOADING, ADD_PRODUCT, ERROR_DATA } from "./addProduct.type";
import { addProduct } from "../../../API/Product/product";
export const AddProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await addProduct(data);
      if (response) {
        dispatch({ type: ADD_PRODUCT, payload: response.data });
      }
    } catch (ex) {
      console.log(ex);

      dispatch({ type: ERROR_DATA, payload: ex.response.data });
    }
  };
};

export default AddProduct;
