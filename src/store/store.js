import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/rootReducer";

const middleware = applyMiddleware(thunk);
const composeEnhancers = composeWithDevTools(middleware);
const store = createStore(reducers, composeEnhancers);

export default store;

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
