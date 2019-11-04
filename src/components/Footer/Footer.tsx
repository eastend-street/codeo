import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  text-align: center;
  opacity: 0.5;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copyright>&copy; Codeal 2019 All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer;
