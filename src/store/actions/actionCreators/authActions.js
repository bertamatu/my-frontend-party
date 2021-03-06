import axios from "axios";
import * as actionTypes from "../actionTypes";

function login(username, password) {
  return function (dispatch) {
    dispatch({ type: actionTypes.AUTH_PENDING });

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
        const data = response.data;
        const { error } = data;
        if (error) {
          throw error;
        }
        dispatch({
          type: actionTypes.AUTH_SUCCESS,
          payload: response.data,
          isLogin: true,
        });
        console.log("LOGIN_SUCCESS", response.data);
      })
      .catch((error) => {
        console.error("Error logging in. Error: ".error);
        dispatch({ type: actionTypes.AUTH_ERROR, error: error });
      });
  };
}

export default login;
