import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Link, { Redirect } from "react-dom";

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

  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem("token");
      if (token && token.token) {
        setToken(token);
      }
    };
    getToken();
  }, []);

  if (loading) {
    return <h5>Loading...</h5>;
  }
  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  //login => sends credentials, gets token and sets it to localStorage;
  const login = (e) => {
    e.preventDefault();
    setLoading(true);

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
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setToken(token);
        console.warn("TOKEN from login() ====>", response.data.token);
        console.warn(
          "TOKEN LocalStorage login() ====>",
          localStorage.getItem("token")
        );
      })
      .catch((error) => {
        setLoading(false);
        setError("Fetch failed! Check your credentials!");
        console.log("ERRORIUKAS", error);
      });
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
        <div>
          <Redirect to="/admin" />
          <Link to="/admin">admin</Link>
          <button type="submit">LOGOUT</button>
        </div>
      )}
    </LogInContainer>
  );
};

export default LoginForm;
