import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInVideoDetail = keyframes`
  0% {
    height: 0%;
  }
  50% {
    height: 50%;
  }
  100% {
    height: 100%;
  }
`;

const fadeOutVideoDetail = keyframes`
  0% {
    height: 100%
  }
  50% {
    height: 50%;
  }
  100% {
    height: 0%;
  }
`;

const StyledFade = styled.div`
  background-color: grey;
  color: #fff;
  overflow: hidden;
  animation: ${props => (props.show ? "fadeIn" : "fadeOut")} 1s forwards;
`;

const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <StyledFade show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </StyledFade>
    )
  );
};

export default Fade;