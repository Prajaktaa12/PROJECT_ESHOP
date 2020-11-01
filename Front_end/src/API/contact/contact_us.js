import axios from "axios";

export const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const userContact = (data) => {
  let contact = "http://localhost:4600/api/contact/sendmail";
  return axios.post(contact, JSON.stringify(data), config);
};
