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

  const calcVideoColumnNum = () => {
    if (matchMedia("(max-width: 599px)").matches) {
      return 2;
    } else if (matchMedia("(max-width: 959px)").matches) {
      return 3;
    } else if (matchMedia("(max-width: 1279px)").matches) {
      return 4;
    } else {
      return 4;
    }
  };

  const renderVideoDetail = (index: number, video: any) => {
    const gridNum = index + 1;
    const rowNum = Math.floor(index / calcVideoColumnNum()) + 1;
    if (gridNum % calcVideoColumnNum() === 0) {
      return (
        <>
          {rowNum === state.videoDetail.rowNum && state.videoDetail.isOpen && (
            <Grid item xs={12}>
              <VideoDetail videoId={state.videoDetail.videoId} />
            </Grid>
          )}
        </>
      );
    }
  };

  const toggleVideoDetail = (videoId: string, index: number) => {
    const isOpen =
      state.videoDetail.videoId !== videoId || state.videoDetail.videoId === ""
        ? true
        : false;

    const videoDetail = {
      videoId: videoId,
      isOpen: isOpen,
      rowNum: Math.floor(index / calcVideoColumnNum()) + 1
    };
    updateVideoDetail(videoDetail, dispatch);
  };

  return (
    <Content>
      <Grid container>
        {state.videos.items.map((video: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <VideoGrid item xs={6} sm={4} md={3}>
                <WrapVideo
                  onClick={() => toggleVideoDetail(video.id.videoId, index)}
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
