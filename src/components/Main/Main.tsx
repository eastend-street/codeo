import React from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import VideoList from 'components/VideoList';

const Main: React.FC = () => (
  <Content>
    <Nav />
    <EachCategory>
      <VideoList />
    </EachCategory>
  </Content>
);

export default Main;

const Content = styled.div`
  min-height: 85vh;
  padding: 1rem 0;
`;

const EachCategory = styled.div`
  padding: 0 0 1rem 0;
`;
