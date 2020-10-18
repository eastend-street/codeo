import React from 'react';
import styled from 'styled-components';

type VideoProps = {
  url: string;
  title: string;
};

const Video: React.FC<VideoProps> = ({ url, title }) => (
  <Container>
    <Thumbnail src={url} alt={title} />
  </Container>
);

export default Video;

const Container = styled.div`
  transition: 1s;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
