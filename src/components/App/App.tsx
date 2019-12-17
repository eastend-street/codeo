import React, { useReducer } from "react";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import reducer from "../../reducers";

import { Reset } from "styled-reset";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  font-family: sans-serif;
  color: #fff;
  background-color: #232c3b;
  /* background-color: #000; */
`;

const App: React.FC = () => {
  const initialState = {
    videos: {
      items: []
    },
    videoDetail: {
      video: {},
      isVisible: false,
      videoId: "",
      rowNum: 0
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Reset />
      <StyledContainer>
        <Header />
        <Main />
        <Footer />
      </StyledContainer>
    </AppContext.Provider>
  );
};

export default App;
