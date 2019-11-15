import React, { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";

const Content = styled.div`
  margin-top: 1rem;
`;

const VideoTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.2rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  opacity: 0.9;
`;

const ChannelTitle = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0.2rem 0.5rem 0 0.5rem;
`;

const VideoGrid = styled(Grid)`
  && {
    margin-bottom: 2rem;
  }
`;

const VideoList: React.FC = () => {
  const { state } = useContext(AppContext);
  // const { state, dispatch } = useContext(AppContext);
  // useEffect(() => {
  //   getVideos(dispatch);
  // }, [dispatch]);

  // const renderVideos = () => {
  //   {
  //     state.videos.items.map((video: any, index: number) => {
  //       return (
  //         <Grid item xs={12} sm={6} md={3} key={index}>
  //           <Video url={video.snippet.thumbnails.high.url} />
  //           {/* <div>{video.snippet.title}</div> */}
  //         </Grid>
  //       );
  //     });
  //   }
  // };
  return (
    <Content>
      <Grid container spacing={2}>
        {state.videos.items.map((video: any, index: number) => {
          return (
            <VideoGrid item xs={12} sm={4} md={3} key={index}>
              <Video
                url={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
              <VideoTitle>{video.snippet.title}</VideoTitle>
              <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
            </VideoGrid>
          );
        })}
      </Grid>
    </Content>
  );
};

export default VideoList;
