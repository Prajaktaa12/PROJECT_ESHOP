import { LOADING, ERROR_DATA, FORGOT_PASSWORD } from "./forgotpassword.type";
import { forgotPassword } from "../../../API/user/login";

export const ForgotPassword = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await forgotPassword(data);
      if (response) {
        dispatch({ type: FORGOT_PASSWORD, payload: response.data });
      }
    } catch (ex) {
      console.log(ex);
      dispatch({ type: ERROR_DATA, payload: ex.response.data });
    }
  };
};
