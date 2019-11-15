import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* position: relative; */
`;

const Thumbnail = styled.img`
  width: 100%;
  position: relative;
  /* opacity: 0.9; */
  transition: 0.7s;
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
