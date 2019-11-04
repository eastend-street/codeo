import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import * as serviceWorker from "./serviceWorker";
import { Reset } from "styled-reset";
import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: sans-serif;
  color: #fff;
  background-color: #232C3B;
`;

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <StyledContainer>
      <Header />
      <Main />
      <Footer />
    </StyledContainer>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
