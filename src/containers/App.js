import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Admin from "../pages/admin";
import ErrorPage from "../pages/errorPage";
import Navbar from "../components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
