import axios from "axios";
import * as actionTypes from "../actionTypes";

function login(username, password) {
  return function (dispatch) {
    dispatch({ type: LOGIN_PENDING });

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
        const data = result.data;
        const { error } = data;
        if (error) {
          throw error;
        }
        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        console.log("LOGIN_SUCCESS", payload);
      })
      .catch((error) => {
        console.error("Error logging in. Error: ".error);
        dispatch({ type: "LOGIN_ERROR", error: error });
      });
  };
}
