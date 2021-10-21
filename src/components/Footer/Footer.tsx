import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <Container>
    <Copyright>&copy; Codeo All rights reserved.</Copyright>
  </Container>
);

export default Footer;

const Container = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  text-align: center;
  opacity: 0.5;
`;
