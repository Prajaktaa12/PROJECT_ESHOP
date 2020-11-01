import {
  LOADING,
  USER_LOGIN,
  USER_REGISTER,
  ERROR_DATA,
  LOG_OUT,
  LOGGED_USER,
  FORGOT_PASSWORD,
} from "../../actions/user/usertype";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case USER_LOGIN:
      return { data: action.payload, loading: false };
    case LOGGED_USER:
      return { data: action.payload, loading: false };
    case ERROR_DATA:
      return { data: action.payload, loading: false };
    case LOG_OUT:
      return { userremove: true };
    default:
      return state;
  }
};

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case USER_REGISTER:
      return { data: action.payload, loading: false };
    case ERROR_DATA:
      return { data: action.payload, loading: false };
    default:
      return state;
  }
};

export const ResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case FORGOT_PASSWORD:
      return { data: action.payload, loading: false };
    case ERROR_DATA:
      return { error: action.payload };
    default:
      return state;
  }
};
