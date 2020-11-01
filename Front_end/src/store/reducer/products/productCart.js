import {
  PRE_LOADING,
  FETCH_PRODUCT,
  ERROR,
  REMOVE_CART_DATA,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "../../actions/product/product.type";
import {
  AddtoCart,
  addquantity,
  removequantity,
} from "../../reducer/cartUtility/cart";

let INITIAL_VALUE = {
  loading: true,
  items: [],
};
const ProductCartReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case PRE_LOADING:
      return { ...state, loading: state.loading };
    case FETCH_PRODUCT:
      return {
        ...state,
        items: AddtoCart(state.items, action.payload),
        loading: false,
      };
    case REMOVE_CART_DATA:
      return {
        ...state,
        items: state.items.filter((data) => data._id !== action.payload._id),
        loading: false,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: addquantity(state.items, action.payload),
        loading: false,
      };
    case REMOVE_QUANTITY:
      return {
        ...state,
        items: removequantity(state.items, action.payload),
        loading: false,
      };
    case ERROR:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
export default ProductCartReducer;
