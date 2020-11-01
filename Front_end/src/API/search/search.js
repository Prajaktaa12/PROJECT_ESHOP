import axios from "axios";

export const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const searchData = (name) => {
  let Search_endpoint = `http://localhost:4600/api/search/${name}`;
  return axios.get(Search_endpoint, config);
};
