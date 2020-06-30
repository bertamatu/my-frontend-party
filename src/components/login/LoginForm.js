import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import LoginButton from "./LoginButton";

// import { MdLock } from "react-icons/md";
// import axios from "axios";
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

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LogInContainer>
      <section>
        <Logo />
        <FormContainer onSubmit={props.login}>
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
