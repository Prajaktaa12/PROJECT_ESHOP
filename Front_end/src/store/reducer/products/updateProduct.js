import {
  UPDATE_PRODUCT,
  PRE_LOADING,
  ERROR,
} from "../../actions/product/product.type";

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRE_LOADING:
      return { loading: state.loading };
    case UPDATE_PRODUCT:
      return { data: action.payload };
    case ERROR:
      return { data: action.payload };
    default:
      return state;
  }
};
