import React from "react";
import styled from "styled-components";

const MainLogo = styled.p`
  color: rgb(48, 51, 79);
  font-size: 3rem;
  font-weight: 750;
`;
const LogoGreenDot = styled.span`
  color: rgb(159, 213, 58);
  font-size: 4rem;
  margin-left: -0.8rem;
`;

const Logo = () => {
  return (
    <MainLogo>
      testio <LogoGreenDot>.</LogoGreenDot>
    </MainLogo>
  );
};

export default Logo;
