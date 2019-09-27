import React from "react";
import styled from "styled-components";

const Content = styled.footer`
  height: 85vh;
  padding: 2rem;
`;

const EachCategory = styled.div`
  padding: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const WrapMovies = styled.div``;

const StyledIframe = styled.iframe`
  margin: 1rem 1rem 1rem 0;
  width: 560px;
  height: 315px;
  border: none;
`;

const App: React.FC = () => {
  return (
    <Content>
      <EachCategory>
        <StyledH2>Python</StyledH2>
        <WrapMovies>
          <StyledIframe
            src="https://www.youtube.com/embed/Z1Yd7upQsXY"
            // frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
            title="Z1Yd7upQsXY"
          ></StyledIframe>
        </WrapMovies>
      </EachCategory>
      <EachCategory>
        <StyledH2>JavaScript</StyledH2>
        <WrapMovies></WrapMovies>
      </EachCategory>
      <EachCategory>
        <StyledH2>React</StyledH2>
        <WrapMovies></WrapMovies>
      </EachCategory>
    </Content>
  );
};

export default App;
