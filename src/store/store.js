import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/rootReducer";

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
