import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serversReducer from "./serversReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
});

export default rootReducer;
