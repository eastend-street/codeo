import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Logo variant="h6">Codeo</Logo>
    </Toolbar>
  </StyledAppBar>
);

export default Header;

const StyledAppBar = styled(AppBar)`
  && {
    color: #fff;
    background-color: #232c3b;
    box-shadow: none;
    height: 3rem;
  }
`;

const Logo = styled(Typography)`
  && {
    font-size: 1.5rem;
    /* color: #ffcb00; */
    font-weight: bold;
  }
`;
