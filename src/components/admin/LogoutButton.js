import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import auth from "../../services/auth";

const ButtonLogout = styled(Link)`
  text-decoration: none;
  color: gray;
  font-size: 0.9rem;
  &:hover {
    color: #99cc33;
    transition: 300ms ease-out;
  }
`;
const LogoutButton = () => {
  return (
    <ButtonLogout to="/login" onClick={() => auth.logout()}>
      Logout
    </ButtonLogout>
  );
};

export default LogoutButton;
