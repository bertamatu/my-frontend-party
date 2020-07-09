import * as actionTypes from "../actions/actionTypes";

const login = (
  state = {
    token: "",
    pending: false,
    error: "",
    isLoggedIn: false,
  },
  action
) => {
  let newState = state;
  const isLogin = !!action.isLogin;
  console.log(action, state);
  switch (action.type) {
    case actionTypes.AUTH_PENDING:
      newState = { ...state, pending: true };
      break;
    case actionTypes.AUTH_SUCCESS:
      newState = {
        ...state,
        token: isLogin ? action.payload : "",
        error: null,
        pending: false,
        isLoggedIn: isLogin,
      };
      break;
    case actionTypes.AUTH_ERROR:
      newState = {
        ...state,
        error: action.error,
        pending: false,
        token: "",
        isLoggedIn: false,
      };
      break;
    default:
      return newState;
  }
  return newState;
};

export default login;
