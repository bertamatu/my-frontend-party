import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
// import { MdLock } from "react-icons/md";
// import { FaUser } from "react-icons/fa";

const LogInContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
`;
const Form = styled.form`
  width: 12rem;
`;
const Input = styled.input`
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
const Button = styled.input`
  box-sizing: content-box;
  min-width: 100%;
  padding: 0.7rem;
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

const LoginForm = () => {
  return (
    <LogInContainer>
      <Logo />
      <Form action="post">
        {/* <MdLock /> */}
        <Input type="text" placeholder="Username" />
        {/* <FaUser /> */}
        <Input type="text" placeholder="Password" />
        {/* <Button type="submit">Log in</Button> */}
        <Button type="submit" value="Log in" />
      </Form>
    </LogInContainer>
  );
};

export default LoginForm;
