import React from "react";

import styled from "styled-components";
import { Grid } from "@material-ui/core";

const WrapVideo = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 0 0.5rem;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoDetailGrid = styled(Grid)`
  && {
    background-color: #39414f;
    color: #fff;
    padding: 0.5rem;
  }
`;

const VideoDescGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
  }
`;

const WrapVideoDesc = styled.div`
  padding: 0 3rem;
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ChannelTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`;
const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

type VideoDetailProps = {
  video: any;
};

const VideoDetail = ({ video }: VideoDetailProps) => {
  console.log(video);
  return (
    <VideoDetailGrid container>
      <VideoDescGrid item xs={6}>
        <WrapVideoDesc>
          <VideoTitle>{video.snippet.title}</VideoTitle>
          <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
          <Description>{video.snippet.description}</Description>
        </WrapVideoDesc>
      </VideoDescGrid>
      <Grid item xs={12} sm={6}>
        <WrapVideo>
          <StyledIframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={`${video.id.videoId}`}
          />
        </WrapVideo>
      </Grid>
    </VideoDetailGrid>
  );
};

export default VideoDetail;
