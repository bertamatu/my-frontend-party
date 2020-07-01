import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// import { Redirect } from "react-dom";

import Logo from "../Logo";
import LoginButton from "./LoginButton";
// import { MdLock } from "react-icons/md";
// import { FaUser } from "react-icons/fa";

const LogInContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
`;
const FormContainer = styled.form`
  width: 14rem;
`;
const InputField = styled.input`
  min-width: 100%;
  border: none;
  border-radius: 3px;
  padding: 0.6rem;
  margin-bottom: 0.7rem;
  &::placeholder {
    color: lightgray;
    font-size: 0.7rem;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [servers, setServers] = useState([]);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    const token = localStorage.getItem("token");
    setToken(token);
    console.log("getToken() RESPONSE", token, loggedIn);
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }
  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  //login => sends credentials, gets token and sets it to localStorage;
  const login = (e) => {
    e.preventDefault();
    console.log("LOGGEDIN", loggedIn);

    const credentials = JSON.stringify({
      username: username,
      password: password,
    });
    console.log("credentials", credentials);

    axios
      .post("https://playground.tesonet.lt/v1/tokens", credentials, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setToken(token);
        // getToken();
        console.warn(
          "TOKEN LocalStorage login() ====>",
          localStorage.getItem("token")
        );
      })
      .then(() => {
        setLoggedIn(true);
      })

      .catch((error) => {
        setLoading(false);
        setError("Fetch failed! Check your credentials!");
        console.log("ERRORIUKAS", error);
      });
    console.log("LOGGEDIN", loggedIn);
  };

  const getServers = () => {
    const token = localStorage.getItem("token");
    console.log("getServers() TOKEN ==== > ", token);
    const bearerToken = "Bearer " + token;
    console.log("getServers() BEARERTOKEN ==== > ", bearerToken);

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
        setServers(response.data);
      })
      .catch((error) => {
        if (error) {
          console.log("getServers() ERRORAS... === >>> ", error);
        }
      });
  };

  const logout = () => {
    localStorage.clear();
    console.log("logout() ====>", localStorage.getItem("token"));
  };

  return (
    <LogInContainer>
      {!loggedIn ? (
        <section>
          <Logo />
          <FormContainer onSubmit={login}>
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <LoginButton />
          </FormContainer>
        </section>
      ) : (
        // <Redirect to="/admin" />

        <div>
          <button type="submit" onClick={getServers}>
            <h1>getServers</h1>
          </button>
          <button type="submit" onClick={logout}>
            <h1>LOGOUT</h1>
          </button>
          {servers.slice(0, 3).map((server, index) => (
            <li key={index}>
              <h5>{server.name}</h5>
              <p>{server.distance}</p>
            </li>
          ))}
        </div>
      )}
    </LogInContainer>
  );
};

export default LoginForm;
