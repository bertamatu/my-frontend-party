import axios from "axios";
import storage from "./storage";

const login = (username, password) => {
  const credentials = JSON.stringify({
    username: username,
    password: password,
  });

  const BASE_URL = "https://playground.tesonet.lt/v1/tokens";
  return axios
    .post(`${BASE_URL}`, credentials, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      storage.setToken(response.data.token);
      return storage.getToken();
    })
    .catch((error) => {
      console.error("Error logging in. Error: ".error);
      throw error;
    });
};

const logout = () => {
  storage.setToken("");
  storage.clearStorage();
  return true;
};

export default {
  login,
  logout,
};
