import {
  PRE_LOADING,
  FETCH_WISHLIST_PRODUCT,
  ERROR,
  REMOVE_WISHLIST_DATA,
} from "../../actions/product/product.type";
import { AddtoWishlist } from "../../reducer/wishlistutility/wishlist";

let INITIAL_VALUE = {
  loading: true,
  wishlistitem: [],
};
const ProductWishlistReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case PRE_LOADING:
      return { ...state, loading: state.loading };
    case FETCH_WISHLIST_PRODUCT:
      return {
        ...state,
        wishlistitem: AddtoWishlist(state.wishlistitem, action.payload),
        loading: false,
      };
    case REMOVE_WISHLIST_DATA:
      return {
        ...state,
        wishlistitem: state.wishlistitem.filter(
          (data) => data._id !== action.payload._id
        ),
        loading: false,
      };
    case ERROR:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
export default ProductWishlistReducer;
