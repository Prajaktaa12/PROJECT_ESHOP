import { searchData } from "../../../API/search/search";
import { LOADING, SEARCH_PRODUCT, ERROR } from "./search_type";

export const SearchProduct = (name) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await searchData(name);
      setTimeout(() => {
        dispatch({ type: SEARCH_PRODUCT, payload: response.data });
      }, 1000);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export default SearchProduct;
