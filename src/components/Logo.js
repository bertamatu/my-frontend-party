import React from "react";
import styled from "styled-components";

const MainLogo = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 900;
`;
const LogoGreenDot = styled.span`
  color: rgb(159, 213, 58);
  font-size: 2.5rem;
`;

const Logo = () => {
  return (
    <MainLogo>
      testio <LogoGreenDot>.</LogoGreenDot>
    </MainLogo>
  );
};

export default Logo;
