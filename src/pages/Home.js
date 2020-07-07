import React from "react";
import styled from "styled-components";
import WelcomeMessage from "../components/WelcomeMessage";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background: rgb(34, 40, 61);
`;

const Home = () => {
  return (
    <Container>
      <WelcomeMessage />
    </Container>
  );
};

export default Home;
