import {
  PRE_LOADING,
  GET_PRODUCT,
  ERROR,
} from "../../actions/product/product.type";

const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRE_LOADING:
      return { loading: true };
    case GET_PRODUCT:
      return { data: action.payload, loading: false };
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
export default ProductReducer;
