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

const LoginForm = () => {
  const [credentials, setCredentials] = useState("");
  console.log(credentials);

  return (
    <LogInContainer>
      <section>
        <Logo />
        <FormContainer>
          <InputField
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setCredentials({ username: e.target.value });
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setCredentials({ password: e.target.value });
            }}
          />
        </FormContainer>
      </section>
      <LoginButton />
    </LogInContainer>
  );
};

export default LoginForm;
