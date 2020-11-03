import {
  LOADING,
  SEARCH_PRODUCT,
  ERROR,
} from "../../actions/search/search_type";

const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case SEARCH_PRODUCT:
      return { data: action.payload, loading: false };
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
export default SearchReducer;
