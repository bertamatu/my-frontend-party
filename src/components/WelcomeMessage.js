import React from "react";
import styled from "styled-components";
import LightLogo from "../components/logo/LightLogo";

const MessageContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Message = styled.p`
  color: #86b300;
  padding-right: 1rem;
`;

const WelcomeMessage = () => {
  return (
    <MessageContainer>
      <Message>Welcome to </Message>
      <LightLogo />
    </MessageContainer>
  );
};

export default WelcomeMessage;
