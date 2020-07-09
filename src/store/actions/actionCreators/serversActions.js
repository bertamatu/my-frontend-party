import * as actionTypes from "../actionTypes";
import api from "../../../services/api";

function fetchServers() {
  return function (dispatch) {
    dispatch({ type: actionTypes.SERVERS_FETCH_PENDING });
    return api
      .getServers()
      .then((servers) => {
        dispatch({ type: actionTypes.SERVERS_FETCH_SUCCESS, payload: servers });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.SERVERS_FETCH_ERROR, error: error });
      });
  };
}

export default fetchServers;
