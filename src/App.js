import React from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Admin from "./pages/admin";
import ErrorPage from "./pages/errorPage";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Auth2 from "./components/Auth2";

function App() {
  return (
    <main>
      <Auth2 />
      <br />
      <br />
      <br />

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
