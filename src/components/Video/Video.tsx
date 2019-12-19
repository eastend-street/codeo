import React from "react";
import styled from "styled-components";

const Content = styled.div`
  transition: 1s;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  /* max-height: 10rem; */
  object-fit: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

type VideoProps = {
  url: string,
  title: string
}

const Video: React.FC<VideoProps> = ({url, title}) => {
  return (
    <Content>
      <Thumbnail
        src={url}
        alt={title}
      />
    </Content>
  );
};

export default Video;
