import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import AppContext from 'contexts/AppContext';
import { getVideos, updateVideoDetail } from 'actions';
import NAV_DATA from 'constants/nav';
import mq from 'styles/mediaQuery';

const Nav: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(28.89);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getVideos('react tutorial', dispatch);
  }, [dispatch]);

  const handleOnClick = (param: string, index: number, element: any) => {
    setSelectedNav(index);
    const left = element.getBoundingClientRect().left;
    const width = element.getBoundingClientRect().width;
    setUnderlineLeft(left + width / 2 - 16);
    getVideos(param, dispatch);

    // close videoDetail
    const videoDetail = {
      video: {},
      isVisible: false,
      videoId: '',
      rowNum: 0
    };
    updateVideoDetail(videoDetail, dispatch);
  };

  const renderNav = () =>
    NAV_DATA.map((nav, index) => (
      <NavLi key={index}>
        <StyledNavButton
          selected={index === selectedNav}
          onClick={e => handleOnClick(nav.param, index, e.target)}
        >
          {nav.title}
        </StyledNavButton>
      </NavLi>
    ));

  return (
    <Container>
      <NavUl>{renderNav()}</NavUl>
      <Underline underlineLeft={underlineLeft} />
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: relative;
`;

const StyledNavButton = styled.div<{ selected: boolean }>`
  margin: 0 0.5rem;
  border-radius: 1rem;
  opacity: ${props => (props.selected ? '1' : '0.5')};
  transition: 0.7s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
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
const NavLi = styled.li`
  padding: 0.5rem 1rem;
`;

const Underline = styled.span<{ underlineLeft: number }>`
  background: #fff;
  height: 0.1rem;
  display: block;
  position: absolute;
  left: ${props => props.underlineLeft}px;
  bottom: 0;
  width: 2rem;
  transition: 0.4s;
  ${mq('sm')} {
    display: none;
  }
`;
