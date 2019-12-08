import React, { ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    /* height: 0; */
    opacity: 0
  }
  50% {
    /* height: 50%; */
    opacity: 0.5;
  }
  100% {
    /* height: 100%; */
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    /* height: 100%; */
    opacity: 1;
  }
  50% {
    /* height: 50%; */
    opacity: 0.5;
  }
  100% {
    /* height: 0%; */
    opacity: 0;

  }
`;

const StyledFade = styled.div<{ show: boolean }>`
  overflow: hidden;
  animation: ${props => (props.show ? fadeIn : fadeOut)} 0.3s linear forwards;
`;

type FadeProps = {
  show: any;
  children: ReactNode;
};

const Fade = ({ show, children }: FadeProps) => {
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
