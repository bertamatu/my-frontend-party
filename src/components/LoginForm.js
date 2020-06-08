import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
// import { MdLock } from "react-icons/md";
// import { FaUser } from "react-icons/fa";

const LogInContainer = styled.section`
  text-align: center;

  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
`;
const Form = styled.form`
  min-width: 100%;
`;
const Input = styled.input`
  /* min-width: 100%; */
  border: none;
  border-radius: 2px;
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  &::placeholder {
    color: lightgray;
    font-size: 0.65rem;
  }
`;

const Button = styled.button`
  min-width: 100%;
  padding: 0.5rem;
  background: rgb(159, 213, 58);
  border: none;
  border-radius: 2px;
  font-size: 0.6rem;
  font-weight: 600;
  color: white;
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
      </Form>
      <Button type="submit">Log in</Button>
    </LogInContainer>
  );
};

export default LoginForm;
