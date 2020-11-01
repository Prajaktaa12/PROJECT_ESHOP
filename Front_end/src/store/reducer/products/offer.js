import {
  PRE_LOADING,
  OFFER_PRODUCT,
  ERROR,
} from "../../actions/product/product.type";

let INITIAL_STATE = {
  loading: true,
  offeritem: [],
};
const OfferReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRE_LOADING:
      return { ...state, loading: state.loading };
    case OFFER_PRODUCT:
      return { ...state, offeritem: action.payload, loading: false };
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
export default OfferReducer;
