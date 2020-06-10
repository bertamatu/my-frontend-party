import React from "react";
import BackgroundImage from "../assets/images/surfing_wave.jpg";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: right;
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
