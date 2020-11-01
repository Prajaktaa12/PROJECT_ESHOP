import {
  USER_LOGIN,
  LOADING,
  ERROR_DATA,
  USER_REGISTER,
  LOG_OUT,
  LOGGED_USER,
  RESET_PASSWORD,
} from "./usertype";
import {
  userLogin,
  userRegistration,
  loggedInUser,
  resetPassword,
} from "../../../API/user/login";
import history from "../../../API/shared/history/index";

export const Login = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await userLogin(data);
      if (response) {
        localStorage.setItem(
          "currentuser",
          JSON.stringify(response.data.token)
        );
        setTimeout(() => {
          dispatch({ type: USER_LOGIN, payload: response.data });
          setTimeout(() => {
            history.push("/shop");
            window.location.reload();
          }, 1000);
        }, 1000);
      }
    } catch (ex) {
      console.log(ex);
      setTimeout(() => {
        dispatch({ type: ERROR_DATA, payload: ex.response.data });
      }, 2000);
    }
  };
};

export const Registration = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await userRegistration(data);
      if (response) {
        setTimeout(() => {
          dispatch({ type: USER_REGISTER, payload: response.data });
          history.push("/login");
        }, 1000);
      }
    } catch (ex) {
      console.log(ex);
      setTimeout(() => {
        dispatch({ type: ERROR_DATA, payload: ex.response.data });
      }, 1000);
    }
  };
};

export const Logger = () => {
  return async (dispatch) => {
    let response = await loggedInUser();
    dispatch({ type: LOGGED_USER, payload: response.data });
  };
};

export const Logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("currentuser");
    localStorage.removeItem("persist:root");
    dispatch({ type: LOG_OUT });
    history.push("/login");
    window.location.reload();
  };
};

export const SetNewPassword = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let response = await resetPassword(token);
      if (response) {
        dispatch({ type: RESET_PASSWORD, payload: response.data });
      }
    } catch (ex) {
      console.log(ex);
      dispatch({ type: ERROR_DATA, payload: ex.response.data });
    }
  };
};
