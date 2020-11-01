import { ADD_PRODUCT,LOADING,ERROR_DATA } from "../../actions/product/addProduct.type";

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case LOADING:
        return { loading: true };
      case ADD_PRODUCT:
        return { data: action.payload, loading: false };
      case ERROR_DATA:
        return {data: action.payload, loading: false};
      default:
        return state;
    }
  };