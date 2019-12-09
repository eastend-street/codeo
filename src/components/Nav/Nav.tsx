import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import NavJSON from "../../data/nav.json";

const Container = styled.div`
  position: relative;
`;

const NavUl = styled.ul`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const NavLi = styled.li``;

const StyledNavButton = styled.div<{ selected: boolean }>`
  margin: 0 1rem;
  padding-bottom: 0.3rem;
  /* border-bottom: ${props =>
    props.selected ? "0.1rem solid #fff" : "none"}; */
  opacity: ${props => (props.selected ? "1" : "0.5")};
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Underline = styled.span`
  background: #fff;
  height: 0.1rem;
  display: block;
  position: absolute;
  left:87px;
  bottom: 0;
  width: 3rem;
`;

type NavData = {
  title: string;
  param: string;
};

// const moveUnderline = () => {
//   return(

//   )
// }

const Nav: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    getVideos("react programming", dispatch);
  }, [dispatch]);

  const handleOnClick = (param: string, index: number, value: any) => {
    console.log(value.offsetY)
    setSelectedNav(index);
    getVideos(param, dispatch);
  };

  const renderNav = () => {
    const navData: NavData[] = NavJSON;
    return navData.map((eachData: NavData, index) => {
      const selected = index === selectedNav ? true : false;
      return (
        <NavLi key={index}>
          <StyledNavButton
            selected={selected}
            onClick={(e) => handleOnClick(eachData.param, index, e)}
          >
            {eachData.title}
          </StyledNavButton>
        </NavLi>
      );
    });
  };

  return (
    <Container>
      <NavUl>{renderNav()}</NavUl>
      <Underline />
    </Container>
  );
};

export default Nav;
