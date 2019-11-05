import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton/NavButton";
import NavJSON from "../../data/nav.json";

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

type NavData = {
  title: string;
  link: string;
};

const Nav: React.FC = () => {
  const renderNav = () => {
    const navData: NavData[] = NavJSON;
    return navData.map((eachData: NavData, index) => (
      <NavLi key={index}>
        <NavButton label={eachData.title} />
      </NavLi>
    ));
  };

  return (
    <Container className="scroll-menu">
      <NavUl className="scroll-menu-inner">
        {renderNav()}
      </NavUl>
    </Container>
  );
};

export default Nav;
