import {
  LOADING,
  FORGOT_PASSWORD,
  ERROR_DATA,
} from "../../actions/user/forgotpassword.type.js";

export const ForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case FORGOT_PASSWORD:
      return { data: action.payload, loading: false };
    case ERROR_DATA:
      return { data: action.payload, loading: false };
    default:
      return state;
  }
};
export default ForgotPasswordReducer;
