import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";

const Content = styled.div``;

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
          <Video />
        </Grid>
      </Grid>
    </Content>
  );
};

export default VideoList;
