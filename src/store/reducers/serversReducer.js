import * as actionTypes from "../actions/actionTypes";

const servers = (
  state = {
    pending: false,
    servers: {}, // This will tell you if you are logged In or logged Out
  },
  action
) => {
  let newState = state;
  switch (action.type) {
    case actionTypes.SERVERS_FETCH_PENDING:
      newState = { ...state, pending: true };
      break;
    case actionTypes.SERVERS_FETCH_SUCCESS:
      newState = {
        ...state,
        error: null,
        pending: false,
        servers: action.payload,
      };
      break;
    case actionTypes.SERVERS_RESET:
      newState = {
        ...state,
        pending: false,
        error: null,
        servers: {},
      };
      break;
    case actionTypes.SERVERS_FETCH_ERROR:
      newState = {
        ...state,
        error: action.error,
        pending: false,
        servers: {},
      };
      break;
    default:
      return newState;
  }
  return newState;
};

export default servers;

// const servers = (
//   state = {
//     servers: {},
//   },
//   action
// ) => {
//   let newState = state;

//   switch (action.type) {
//     case actionTypes.SERVERS_FETCH_PENDING:
//       newState = { ...state, pending: true };
//       break;
//     case actionTypes.SERVERS_FETCH_SUCCESS:
//       newState = {
//         ...state,
//         servers: action.payload,
//         error: null,
//         pending: false,
//       };
//       break;
//     case actionTypes.SERVERS_FETCH_ERROR:
//       newState = { ...state, error: action.error, pending: false };
//       break;
//     case actionTypes.SERVERS_RESET:
//       newState = { ...state, servers: {}, error: null, pending: false };
//       break;
//     default:
//       return newState;
//   }
//   return newState;
// };

// export default servers;
