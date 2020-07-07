import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorMessage = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkHome = styled(Link)`
  color: red;
`;

const Error = () => {
  return (
    <ErrorMessage>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <LinkHome to="/">go back Home</LinkHome>
    </ErrorMessage>
  );
};

export default Error;
