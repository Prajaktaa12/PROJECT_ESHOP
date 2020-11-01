import { PRE_LOADING, UPDATE_PRODUCT, ERROR } from "./product.type";
import { updateProduct } from "../../../API/Product/product";
export const UpdateProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await updateProduct(data);
      if (response) {
        dispatch({ type: UPDATE_PRODUCT, payload: response.data });
      }
    } catch (ex) {
      console.log(ex);

      dispatch({ type: ERROR, payload: ex.response });
    }
  };
};

export default UpdateProduct;
