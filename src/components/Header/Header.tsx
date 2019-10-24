import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const StyledAppBar = styled(AppBar)`
  && {
    color: #000;
    background-color: #fff;
    box-shadow: none;
  }
`;

const Logo = styled(Typography)`
  && {
    padding-left: 1rem;
    font-size: 1.5rem;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6">Codeal</Logo>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
