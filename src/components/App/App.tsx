import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import AppContext from 'contexts/AppContext';
import reducer from 'reducers';

import Main from 'components/Main';
import Footer from '../Footer';
import Header from '../Header';

const App: React.FC = () => {
  const initialState = {
    videos: [],
    videoDetail: {
      video: {},
      isVisible: false,
      videoId: '',
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

const StyledContainer = styled.div`
  font-family: sans-serif;
  color: #fff;
  background-color: #232c3b;
  /* background-color: #000; */
`;
