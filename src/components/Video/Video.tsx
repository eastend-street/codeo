import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* position: relative; */
  padding-bottom: 56.25%;
  margin: 0.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
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
  url: any
}

const Video: React.FC = () => {
  return (
    <Content>
      <Thumbnail
        src="sss"
        alt="Z1Yd7upQsXY"
      />
    </Content>
  );
};

export default Video;
