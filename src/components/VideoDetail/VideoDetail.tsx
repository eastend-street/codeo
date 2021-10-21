import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

import formatNumber from 'utils/formatNumber';

import mq from 'styles/mediaQuery';

interface VideoDetailProps {
  video: any;
};

const VideoDetail = ({ video }: VideoDetailProps) => {
  useEffect(() => {
    document.getElementById('videoDetail')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
  return (
    <VideoDetailGrid container id="videoDetail">
      <VideoDescGrid item xs={12} sm={6}>
        <WrapVideoDesc>
          <VideoTitle>{video.snippet.title}</VideoTitle>
          <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
          {video.hasOwnProperty('statistics') && (
            <Statistics>
              <ViewCount>
                {formatNumber(video.statistics.viewCount)} views{' '}
              </ViewCount>
              <ThumbUpIcon />
              <LikeCount>{formatNumber(video.statistics.likeCount)}</LikeCount>
              <ThumbDownIcon />
              <span>{formatNumber(video.statistics.dislikeCount)}</span>
            </Statistics>
          )}
          <Description>{video.snippet.description}</Description>
        </WrapVideoDesc>
      </VideoDescGrid>
      <VideoGrid item xs={12} sm={6}>
        <WrapVideo>
          <StyledIframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={`${video.id.videoId}`}
          />
        </WrapVideo>
      </VideoGrid>
    </VideoDetailGrid>
  );
};

export default VideoDetail;

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

  ${mq('xs')} {
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
    ${mq('xs')} {
      order: 2;
    }
  }
`;

const WrapVideoDesc = styled.div`
  padding: 0 3rem;
  ${mq('sm')} {
    padding: 1rem;
  }
  ${mq('xs')} {
    padding: 1rem 1.5rem;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  ${mq('sm')} {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

const ChannelTitle = styled.div`
  font-size: 1rem;
  opacity: 0.7;
  ${mq('sm')} {
    font-size: 0.9rem;
  }
`;
const Statistics = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.7;
  ${mq('sm')} {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

const ViewCount = styled.span`
  padding-right: 1rem;
`;

const LikeCount = styled.span`
  padding-right: 1rem;
`;

const ThumbUpIcon = styled(ThumbUp)`
  && {
    font-size: 0.9rem;
    padding-right: 0.2rem;
    ${mq('sm')} {
      font-size: 0.8rem;
    }
  }
`;

const ThumbDownIcon = styled(ThumbDown)`
  && {
    font-size: 0.9rem;
    padding-right: 0.2rem;
    ${mq('sm')} {
      font-size: 0.8rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  opacity: 0.9;
  ${mq('sm')} {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;
