import React from "react";
import styled from "styled-components";

const MainLogo = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 750;
`;
const LogoGreenDot = styled.span`
  color: rgb(159, 213, 58);
  font-size: 4rem;
`;

const Logo = () => {
  return (
    <MainLogo>
      testio <LogoGreenDot>.</LogoGreenDot>
    </MainLogo>
  );
};

export default Logo;
