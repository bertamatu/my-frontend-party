import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/surfing_wave.jpg";
import LoginForm from "../components/login/LoginForm";

const HomePageContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    background-position: right;
  }
`;
const Content = styled.section`
  background: rgba(30, 38, 65, 0.7);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = (props) => {
  return (
    <HomePageContainer>
      <Content>
        <LoginForm {...props} />
      </Content>
    </HomePageContainer>
  );
};

export default Login;
