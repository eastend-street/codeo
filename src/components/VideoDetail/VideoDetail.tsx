import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const VideoDetailGrid = styled(Grid)`
  && {
    background-color: #39414f;
    color: #fff;
    padding: 0.5rem;
    overflow: hidden;
  }
`;

const VideoGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WrapVideo = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 0 0.5rem;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoDescGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      order: 2;
    }
  }
`;

const WrapVideoDesc = styled.div`
  padding: 0 3rem;
  @media (max-width: 960px) {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  @media (max-width: 960px) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

const ChannelTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.7;
  @media (max-width: 960px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;
const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
`;

type VideoDetailProps = {
  video: any;
};

const VideoDetail = ({ video }: VideoDetailProps) => {
  return (
    <VideoDetailGrid container>
      <VideoDescGrid item xs={12} sm={6}>
        <WrapVideoDesc>
          <VideoTitle>{video.snippet.title}</VideoTitle>
          <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
          <Description>{video.snippet.description}</Description>
        </WrapVideoDesc>
      </VideoDescGrid>
      <VideoGrid item xs={12} sm={6}>
        <WrapVideo>
          <StyledIframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={`${video.id.videoId}`}
          />
        </WrapVideo>
      </VideoGrid>
    </VideoDetailGrid>
  );
};

export default VideoDetail;
