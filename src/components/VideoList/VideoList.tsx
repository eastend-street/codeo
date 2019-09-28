import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Content = styled.div``;

const WrapVideo = styled.div`
  /* position: relative; */
  padding-bottom: 56.25%;
  margin: 0.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

// const StyledIframe = styled.iframe`
//   border: none;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

const VideoList: React.FC = () => {
  return (
    <Content>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <WrapVideo>
            <Thumbnail
              src="http://img.youtube.com/vi/Z1Yd7upQsXY/hqdefault.jpg"
              alt="Z1Yd7upQsXY"
            />
            {/* <StyledIframe
              src="https://www.youtube.com/embed/Z1Yd7upQsXY"
              allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Z1Yd7upQsXY"
            ></StyledIframe> */}
          </WrapVideo>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WrapVideo>
            <Thumbnail
              src="http://img.youtube.com/vi/_uQrJ0TkZlc/hqdefault.jpg"
              alt="_uQrJ0TkZlc"
            />
            {/* <StyledIframe
            {/* <StyledIframe
              src="https://www.youtube.com/embed/_uQrJ0TkZlc"
              allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Z1Yd7upQsXY"
            ></StyledIframe> */}
          </WrapVideo>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WrapVideo>
            <Thumbnail
              src="http://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg"
              alt="rfscVS0vtbw"
            />
            {/* <StyledIframe
              src="https://www.youtube.com/embed/rfscVS0vtbw"
              allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Z1Yd7upQsXY"
            ></StyledIframe> */}
          </WrapVideo>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WrapVideo>
            <Thumbnail
              src="http://img.youtube.com/vi/Y8Tko2YC5hA/hqdefault.jpg"
              alt="Y8Tko2YC5hA"
            />
            {/* <StyledIframe
              src="https://www.youtube.com/embed/rfscVS0vtbw"
              allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Z1Yd7upQsXY"
            ></StyledIframe> */}
          </WrapVideo>
        </Grid>
      </Grid>
    </Content>
  );
};

export default VideoList;
