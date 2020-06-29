import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/surfing_wave.jpg";
import LoginAuth from "../components/LoginAuth";

const HomePageContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: right;
`;
const Content = styled.section`
  background: rgba(30, 38, 65, 0.7);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <HomePageContainer>
      <Content>
        <LoginAuth />
      </Content>
    </HomePageContainer>
  );
};

export default Login;
