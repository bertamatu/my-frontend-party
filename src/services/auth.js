import * as actionTypes from "../store/actions/actionTypes";
import auth from "./auth";

function login(username, password) {
  return function (dispatch) {
    dispatch({ type: actionTypes.AUTH_PENDING });
    return auth
      .login(username, password)
      .then((tokenInfo) => {
        dispatch({
          type: actionTypes.AUTH_SUCCESS,
          payload: tokenInfo,
          pending: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.AUTH_ERROR,
          payload: null,
          pending: false,
          isLoggedIn: false,
        });
      });
  };
}

export default login;

// import axios from "axios";
// import storage from "./storage";

// const login = (username, password) => {
//   const credentials = JSON.stringify({
//     username: username,
//     password: password,
//   });

//   const BASE_URL = "https://playground.tesonet.lt/v1/tokens";
//   return axios
//     .post(`${BASE_URL}`, credentials, {
//       headers: { "Content-Type": "application/json" },
//     })
//     .then((response) => {
//       storage.setToken(response.data.token);
//       return { token: storage.getToken() };
//     })
//     .catch((error) => {
//       console.error("Error logging in. Error: ".error);
//       throw error;
//     });
// };

// const logout = () => {
//   return new Promise((res, reject) => {
//     storage.clearStorage();
//     return true;
//   });
// };

// export default {
//   login,
//   logout,
// }
