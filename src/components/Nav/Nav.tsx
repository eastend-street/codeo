import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton/NavButton";

const Container = styled.div``;

const NavUl = styled.ul`
  display: flex;
`;
const NavLi = styled.li`
  margin: 0 1rem 0.5rem 1rem;
  opacity: 0.5;
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Nav: React.FC = () => {
  return (
    <Container className="scroll-menu">
      <NavUl className="scroll-menu-inner">
        <NavLi>
          <NavButton label="React" />
        </NavLi>
        <NavLi>HTML</NavLi>
        <NavLi>CSS</NavLi>
        <NavLi>JavaScript</NavLi>
        <NavLi>Python</NavLi>
        <NavLi>Ruby</NavLi>
        <NavLi>How to learn</NavLi>
        <NavLi>Carrer</NavLi>
        <NavLi>Most popular</NavLi>
      </NavUl>
    </Container>
  );
};

export default Nav;
