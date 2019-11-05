import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton/NavButton";
import NavJSON from "../../json/nav.json";

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

const renderNav = () => {
  const navData = JSON.parse(NavJSON);
} 

const Nav: React.FC = () => {
  return (
    <Container className="scroll-menu">
      <NavUl className="scroll-menu-inner">
        <NavLi>
          <NavButton label="React" />
        </NavLi>
        <NavLi>
          <NavButton label="HTML" />
        </NavLi>
        <NavLi>
          <NavButton label="CSS" />
        </NavLi>
        <NavLi>
          <NavButton label="JavaScript" />
        </NavLi>
        <NavLi>
          <NavButton label="Python" />
        </NavLi>
        <NavLi>
          <NavButton label="Ruby" />
        </NavLi>
        <NavLi>
          <NavButton label="How to learn" />
        </NavLi>
        <NavLi>
          <NavButton label="Carrer" />
        </NavLi>
        <NavLi>
          <NavButton label="Most popular" />
        </NavLi>
      </NavUl>
    </Container>
  );
};

export default Nav;
