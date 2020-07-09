import React from "react";
import styled from "styled-components";

const ButtonLogin = styled.button`
  box-sizing: content-box;
  min-width: 100%;
  padding: 0.7rem 0.6rem;
  background: rgb(159, 213, 58);
  border: none;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  &:hover {
    transition: 0.5s all ease-out;
    background: #86b300;
  }
`;

const LoginButton = () => {
  return (
    <div>
      <ButtonLogin type="submit">LOGIN</ButtonLogin>
    </div>
  );
};

export default LoginButton;
