import React from "react";
import styled from "styled-components";

type NavButtonProps = {
  label: string;
  // link: string;
};

const StyledNavButton = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  opacity: 0.5;
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const NavButton: React.FC<NavButtonProps> = props => {
  return <StyledNavButton>{props.label}</StyledNavButton>;
};

export default NavButton;
