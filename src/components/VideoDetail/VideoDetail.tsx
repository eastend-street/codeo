import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

// const StyledIframe = styled.iframe`
//   border: none;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

const VideoDetailGrid = styled(Grid)`
  && {
    background-color: #fff;
    color: #000;
    /* display: none; */
  }
`;

type VideoDetailProps = {
  url: string;
};

const VideoDetail = ({ url }: VideoDetailProps) => {
  return (
    <VideoDetailGrid container>
      <Grid item xs={6}>
        <div>here is video detail</div>
      </Grid>
      <Grid item xs={6}>
        <div>here is embed video</div>
      </Grid>
    </VideoDetailGrid>
  );
};

export default VideoDetail;
