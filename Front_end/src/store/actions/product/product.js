import {
  productData,
  productDataById,
  productOffer,
} from "../../../API/Product/product";
import {
  PRE_LOADING,
  GET_PRODUCT,
  ERROR,
  FETCH_PRODUCT,
  FETCH_WISHLIST_PRODUCT,
  REMOVE_CART_DATA,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  OFFER_PRODUCT,
  REMOVE_WISHLIST_DATA,
} from "./product.type";

export const FetchProduct = () => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productData();
      setTimeout(() => {
        dispatch({ type: GET_PRODUCT, payload: response.data });
      }, 1000);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const FetchProductById = (id) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productDataById(id);
      setTimeout(() => {
        dispatch({ type: FETCH_PRODUCT, payload: response.data });
      }, 1000);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const RemoveProductById = (id) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productDataById(id);
      dispatch({ type: REMOVE_CART_DATA, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const AddQuantity = (item) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      dispatch({ type: ADD_QUANTITY, payload: item });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const RemoveQuantity = (item) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      dispatch({ type: REMOVE_QUANTITY, payload: item });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const OfferProduct = () => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productOffer();
      setTimeout(() => {
        dispatch({ type: OFFER_PRODUCT, payload: response.data });
      }, 1000);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const RemoveProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productDataById(id);
      dispatch({ type: REMOVE_WISHLIST_DATA, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};

export const GetProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: PRE_LOADING });
    try {
      let response = await productDataById(id);
      setTimeout(() => {
        dispatch({ type: FETCH_WISHLIST_PRODUCT, payload: response.data });
      }, 1000);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response });
    }
  };
};
