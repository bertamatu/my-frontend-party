const login = (
  state = {
    token: "",
    pending: false,
    error: "",
    isLoggedIn: false,
  },
  action
) => {
  // --- ALWAYS RETURN newState
  let newState = state;
  console.log("LOGIN_REDUCER", action.type);
  switch (action.type) {
    case "LOGIN_PENDING":
      newState = { ...state, pending: true };
      break;
    case "LOGIN_SUCCESS":
      newState = {
        ...state,
        token: action.payload,
        error: null,
        pending: false,
        isLoggedIn: true,
      };
      break;
    case "LOGIN_ERROR":
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
  console.log("LOGIN_STATE", state);
};
