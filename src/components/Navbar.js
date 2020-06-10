import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 10%;
  padding: 2rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: white;
  font-weight: 200;
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
