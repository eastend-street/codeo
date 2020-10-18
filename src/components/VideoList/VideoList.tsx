import React, { useContext } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import AppContext from 'contexts/AppContext';
import { updateVideoDetail } from 'actions';
import formatNumber from 'utils/formatNumber';

import Video from 'components/Video';
import VideoDetail from 'components/VideoDetail';
import Fade from './Fade';

const VideoList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const calcVideoColumnNum = () => {
    if (matchMedia('(max-width: 599px)').matches) {
      return 2;
    } else if (matchMedia('(max-width: 959px)').matches) {
      return 3;
    } else if (matchMedia('(max-width: 1279px)').matches) {
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
          {/* {rowNum === state.videoDetail.rowNum && state.videoDetail.isVisible && ( */}
          {rowNum === state.videoDetail.rowNum && (
            <Grid item xs={12}>
              <Fade show={state.videoDetail.isVisible}>
                <VideoDetail video={state.videoDetail.video} />
              </Fade>
            </Grid>
          )}
        </>
      );
    }
  };

  const toggleVideoDetail = (video: any, index: number) => {
    const videoId = video.id.videoId;
    let isVisible = !state.videoDetail.isVisible;
    if (state.videoDetail.videoId !== videoId) {
      isVisible = true;
    }
    // state.videoDetail.videoId !== videoId || state.videoDetail.videoId === ""
    //   ? true
    //   : false;
    const videoDetail = {
      video: video,
      videoId: videoId,
      isVisible: isVisible,
      rowNum: Math.floor(index / calcVideoColumnNum()) + 1
    };
    updateVideoDetail(videoDetail, dispatch);
  };
  return (
    <Content>
      <Grid container>
        {state.videos.map((video: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <VideoGrid item xs={6} sm={4} md={3}>
                <WrapVideo onClick={() => toggleVideoDetail(video, index)}>
                  <Video
                    url={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                  />
                  <VideoTitle>{video.snippet.title}</VideoTitle>
                  <WrapTitleViewCount>
                    <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
                    {video.hasOwnProperty('statistics') && (
                      <ViewCount>
                        {formatNumber(video.statistics.viewCount)} views
                      </ViewCount>
                    )}
                  </WrapTitleViewCount>
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

const Content = styled.div`
  /* margin-top: 1rem; */
`;

const WrapVideo = styled.div`
  margin: 0 0.7rem;
  cursor: pointer;
`;

const VideoTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.2rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  opacity: 0.9;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const WrapTitleViewCount = styled.div`
  margin-left: 0.5rem;
`;
const ChannelTitle = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  padding-right: 1rem;
  @media (max-width: 960px) {
    display: block;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const ViewCount = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const VideoGrid = styled(Grid)`
  && {
    margin: 1rem 0;
  }
`;
