import axios from "axios";

const getServers = (token) => {
  const bearerToken = "Bearer " + token;
  const BASE_URL = "https://playground.tesonet.lt/v1/servers";
  return axios
    .get(`${BASE_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: bearerToken,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default {
  getServers,
};
