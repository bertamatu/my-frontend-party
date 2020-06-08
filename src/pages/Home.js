import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/surfing_wave.jpg";
import img from "../assets/images/task.jpeg";
import LoginForm from "../components/LoginForm";

const HomePageContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: right;
`;
const ContentContainer = styled.section`
  background: rgba(30, 38, 65, 0.7);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomePageContainer>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>

      <img src={img} alt="img" />
    </HomePageContainer>
  );
};

export default Home;
