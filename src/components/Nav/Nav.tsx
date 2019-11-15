import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";

import NavJSON from "../../data/nav.json";

const Container = styled.div``;

const NavUl = styled.ul`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style:none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const NavLi = styled.li``;

const StyledNavButton = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  opacity: 0.5;
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

type NavData = {
  title: string;
  param: string;
};

const Nav: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    getVideos("react programming", dispatch);
  }, [dispatch]);

  const handleOnClick = (param: string) => {
    getVideos(param, dispatch);
  };

  const renderNav = () => {
    const navData: NavData[] = NavJSON;
    return navData.map((eachData: NavData, index) => (
      <NavLi key={index}>
        <StyledNavButton onClick={() => handleOnClick(eachData.param)}>
          {eachData.title}
        </StyledNavButton>
      </NavLi>
    ));
  };

  return (
    <Container>
      <NavUl>{renderNav()}</NavUl>
    </Container>
  );
};

export default Nav;
