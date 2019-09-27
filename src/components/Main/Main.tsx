import React from "react";
import styled from "styled-components";
import VideoList from "../VideoList/VideoList";

const Content = styled.div`
  min-height: 85vh;
  padding: 2rem;
`;

const EachCategory = styled.div`
  padding: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Main: React.FC = () => {
  return (
    <Content>
      <EachCategory>
        <StyledH2>Python</StyledH2>
        <VideoList />
      </EachCategory>
      <EachCategory>
        <StyledH2>JavaScript</StyledH2>
        <VideoList />
      </EachCategory>
      <EachCategory>
        <StyledH2>React</StyledH2>
        <VideoList />
      </EachCategory>
    </Content>
  );
};

export default Main;
