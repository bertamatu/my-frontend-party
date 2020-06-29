import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      login: false,
      token: null,
      servers: [],
    };
  }
  componentDidMount() {
    this.getToken();
  }
  login = () => {
    fetch("https://playground.tesonet.lt/v1/tokens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        // console.warn("login() ATSAKYMAS ====>", result.token);
        localStorage.setItem(
          "token",
          result.token
          //   JSON.stringify({
          //     token: result.token,
          //   })
        );
        this.getToken();
      });
    });
  };
  getToken = () => {
    const token = localStorage.getItem("token");
    if (token && token.token) {
      this.setState({ login: true, token: token });
    }
    // console.log("getToken() reiksme ===>", token);
  };

  getServers = () => {
    const token = localStorage.getItem("token");
    // console.log("getServers() TOKEN ==== > ", token);
    const bearerToken = "Bearer " + token;
    // console.log("getServers() BEARERTOKEN ==== > ", bearerToken);

    axios
      .get("https://playground.tesonet.lt/v1/servers", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((response) => {
        console.log("getServers() RESPONSE1 ===> ", response.data);
        this.setState({
          servers: response.data,
        });
      })
      .catch((error) => {
        if (error) {
          console.log("getServers() ERRORAS... === >>> ", error);
        }
      });
  };

  logout = () => {
    localStorage.clear();
    console.log("logout() ====>", localStorage.getItem("login"));
  };

  render() {
    return (
      <section>
        {!this.state.login ? (
          <section>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <button
              type="submit"
              onClick={() => {
                this.login();
              }}
            >
              LOGIN
            </button>

            <button type="button" onClick={this.getServers}>
              GET SERVERS
            </button>
          </section>
        ) : (
          <div>
            <Link to="/admin">admin</Link>
            <button type="button" onClick={this.logout}>
              LOGOUT
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default Auth;
