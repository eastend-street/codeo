import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const StyledAppBar = styled(AppBar)`
  && {
    color: #000;
    background-color: #fff;
  }
`;

const App: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Programming Tube</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default App;
