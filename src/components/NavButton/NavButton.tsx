import React from 'react';
import styled from 'styled-components';

type NavButtonProps = {
  label: string;
  // link: string;
};

const NavButton: React.FC<NavButtonProps> = props => (
  <Container>{props.label}</Container>
);

export default NavButton;

const Container = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  opacity: 0.5;
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
