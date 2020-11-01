import {
  LOADING,
  SEARCH_PRODUCT,
  ERROR,
} from "../../actions/search/search_type";

let INITIAL_STATE = {
  loading: true,
  searchResult: [],
};
const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: state.loading };
    case SEARCH_PRODUCT:
      return { ...state, searchResult: action.payload, loading: false };
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
export default SearchReducer;
