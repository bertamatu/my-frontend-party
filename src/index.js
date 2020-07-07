import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./store/reducers";

// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/*provider makes store global */}
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
