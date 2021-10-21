import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import AppContext from 'contexts/AppContext';
import initialState from 'contexts/initialState';
import reducer from 'reducers';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import VideoList from 'components/VideoList';

import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Reset />
      <GlobalStyle />
      <Container>
        <Header />
        <Nav />
        <VideoList />
        <Footer />
      </Container>
    </AppContext.Provider>
  );
};

export default App;

const Container = styled.div`
  min-height: 85vh;
  max-width: var(--content-max-width);
  margin: 0 auto;
`;
