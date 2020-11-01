import axios from "axios";
import { authUser } from "../../helpers/currentuser";

export const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const userLogin = (data) => {
  let login = "http://localhost:4600/api/login";
  return axios.post(login, JSON.stringify(data), config);
};

export const userRegistration = (data) => {
  let registration = "http://localhost:4600/api/register";
  return axios.post(registration, JSON.stringify(data), config);
};

export const loggedInUser = () => {
  let LOGGEDIN_ENDPOINT = "http://localhost:4600/api/currentuser";
  return axios.get(LOGGEDIN_ENDPOINT, {
    headers: authUser(),
    "Content-Type": "application/json",
  });
};

export const forgotPassword = (data) => {
  let renewPassword = "http://localhost:4600/api/forgotpassword";
  return axios.post(renewPassword, JSON.stringify(data), config);
};

export const resetPassword = (token) => {
  let setNewPassword = `http://localhost:4600/api/resetpassword/${token}`;
  return axios.post(setNewPassword, JSON.stringify(token), config);
};
