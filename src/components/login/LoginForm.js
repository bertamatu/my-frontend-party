import React, { useState, useEffect } from "react";
import styled from "styled-components";
import auth from "../../services/auth";
import storage from "../../services/storage";

import Logo from "../logo/LightLogo";
import LoginButton from "./LoginButton";

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

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = storage.getToken();
    if (token) props.history.push("/admin");
  }, []);

  if (loading) {
    return <h5>Loading...</h5>;
  }
  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  const login = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setError("");

    auth
      .login(username, password)
      .then((token) => {
        setLoggedIn(true);
        props.history.push("/admin");
      })
      .catch((error) => {
        setLoading(false);
        setError("Fetch failed! Check your credentials!");
      });
  };

  const logout = () => {
    auth.logout();
  };

  return (
    <LogInContainer>
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
    </LogInContainer>
  );
};

export default LoginForm;
