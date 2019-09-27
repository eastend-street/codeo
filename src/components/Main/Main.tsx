import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

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
  margin: 1rem;
  border: none;
`;

const App: React.FC = () => {
  return (
    <Content>
      <EachCategory>
        <StyledH2>Python</StyledH2>
        <WrapMovies>
          <Grid container>
            <Grid item xs={4}>
              <StyledIframe
                src="https://www.youtube.com/embed/Z1Yd7upQsXY"
                allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Z1Yd7upQsXY"
              ></StyledIframe>
            </Grid>
            <Grid item xs={4}>
              <StyledIframe
                src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Z1Yd7upQsXY"
              ></StyledIframe>
            </Grid>
            <Grid item xs={4}>
              <StyledIframe
                src="https://www.youtube.com/embed/rfscVS0vtbw"
                allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Z1Yd7upQsXY"
              ></StyledIframe>
            </Grid>
          </Grid>
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
