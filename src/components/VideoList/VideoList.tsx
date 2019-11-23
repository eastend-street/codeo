import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";
import VideoDetail from "../VideoDetail/VideoDetail";

import { updateVideoDetail } from "../../actions";

const Content = styled.div`
  margin-top: 1rem;
`;

const WrapVideo = styled.div`
  margin: 0.7rem;
  cursor: pointer;
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
    margin: 1rem 0;
  }
`;

const VideoList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const renderVideoDetail = (index: number, video: any) => {
    const gridNum = index + 1;
    const rowNum = Math.floor(index / 4) + 1;
    // TODO: gridNum should be change with media query
    if (gridNum % 4 === 0) {
      return (
        <>
          {rowNum === state.videoDetail.rowNum && state.videoDetail.isOpen && (
            <Grid item xs={12}>
              <VideoDetail video={state.videoDetail.video} />
            </Grid>
          )}
        </>
      );
    }
  };

  const toggleVideoDetail = (video: any, index: number) => {
    const videoId = video.id.videoId; 
    const isOpen =
      state.videoDetail.videoId !== videoId || state.videoDetail.videoId === ""
        ? true
        : false;

    const videoDetail = {
      video: video,
      videoId: videoId,
      isOpen: isOpen,
      rowNum: Math.floor(index / 4) + 1
    };

    updateVideoDetail(videoDetail, dispatch);
  };

  return (
    <Content>
      <Grid container>
        {state.videos.items.map((video: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <VideoGrid item xs={6} sm={4} md={3} xl={2}>
                <WrapVideo
                  onClick={() => toggleVideoDetail(video, index)}
                >
                  <Video
                    url={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                  />
                  <VideoTitle>{video.snippet.title}</VideoTitle>
                  <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
                </WrapVideo>
              </VideoGrid>
              {renderVideoDetail(index, video)}
            </React.Fragment>
          );
        })}
      </Grid>
    </Content>
  );
};

export default VideoList;
