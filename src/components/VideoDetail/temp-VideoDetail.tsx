import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";
import { Transition } from "react-transition-group";

const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0
};

const transitionStyles: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

// const fadeInVideoDetail = keyframes`
//   0% {
//     height: 0%;
//   }
//   50% {
//     height: 50%;
//   }
//   100% {
//     height: 100%;
//   }
// `;

// const fadeOutVideoDetail = keyframes`
//   0% {
//     height: 100%
//   }
//   50% {
//     height: 50%;
//   }
//   100% {
//     height: 0%;
//   }
// `;

// visibility: ${props => (props.active ? "visible" : "hidden")}; */
//  animation: ${props =>
//   props.active ? fadeInVideoDetail : fadeOutVideoDetail}
// 0.3s linear 0s 1 forwards;

const VideoDetailGrid = styled(Grid)`
  && {
    background-color: #39414f;
    color: #fff;
    padding: 0.5rem;
    overflow: hidden;
    /* transition: all 1s ease; */
  }
`;

// const VideoDetailGrid = styled(Grid)`
//   && {
//     background-color: #39414f;
//     color: #fff;
//     padding: 0.5rem;
//     overflow: hidden;
//     /* transition: all 1s; */
//   }
// `;

const WrapVideo = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin: 0 0.5rem;
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
  }
`;

const WrapVideoDesc = styled.div`
  padding: 0 3rem;
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ChannelTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`;
const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

type VideoDetailProps = {
  video: any;
  isOpen: boolean;
};

const VideoDetail = ({ video, isOpen }: VideoDetailProps) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    return () => {
      console.log("aaaaaaaaaa");
      setInProp(false);
    };
  }, []);
  return (
    <Transition in={inProp} timeout={300}>
      {state => (
        <VideoDetailGrid
          container
          // active={isOpen}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          // onTransitionEnd={()=>setInProp(false)}
        >
          <VideoDescGrid item xs={6}>
            <WrapVideoDesc>
              <VideoTitle>{video.snippet.title}</VideoTitle>
              <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
              <Description>{video.snippet.description}</Description>
            </WrapVideoDesc>
          </VideoDescGrid>
          <Grid item xs={12} sm={6}>
            <WrapVideo>
              <StyledIframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={`${video.id.videoId}`}
              />
            </WrapVideo>
          </Grid>
        </VideoDetailGrid>
      )}
    </Transition>
  );
};

// const VideoDetail = ({ video, isOpen }: VideoDetailProps) => {
//   const [inProp, setInProp] = useState(false);
//   useEffect(()=>{
//     setInProp(true);
//   })
//   return (
//     <>
//       <Transition in={inProp} timeout={duration}>
//         {state => (
//           <div
//             style={{
//               ...defaultStyle,
//               ...transitionStyles[state]
//             }}
//           >
//             aaaaaaaaaaaaa
//           </div>
//         )}
//       </Transition>
//     </>
//   );
// };

export default VideoDetail;
