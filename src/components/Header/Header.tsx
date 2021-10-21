import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => (
  <Container>
    <Logo>Codeo</Logo>
  </Container>
);

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
