import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenu = styled.nav`
  padding: 1rem 0;
  position: fixed;
  top: 1rem;
  left: 1rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: #86b300;
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
const Navbar = () => {
  return (
    <NavMenu>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/login">Login</LinkItem>
    </NavMenu>
  );
};

export default Navbar;
