import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* position: relative; */
  transition: 1s;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  max-height: 10rem;
  object-fit: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

// const StyledIframe = styled.iframe`
//   border: none;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

type VideoProps = {
  url: string,
  title: string
}

const Video = ({url, title}:VideoProps) => {
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
