import { USER_CONTACT, ERROR_DATA, LOADING } from "./contacttype";
import { userContact } from "../../../API/contact/contact_us";

export const Contact = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await userContact(data);
      if (response) {
        dispatch({ type: USER_CONTACT, payload: response.data });
      }
    } catch (ex) {
      console.log(ex);
      dispatch({ type: ERROR_DATA, payload: ex.response.data });
    }
  };
};
