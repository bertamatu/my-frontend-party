import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
console.log("LOGINREDUCER", loginReducer);

const rootReducer = combineReducers({
  //import all reducers
  LoginReducer: loginReducer,
});

export default rootReducer;
// export default combineReducers(Object.assign(loginReducer));
