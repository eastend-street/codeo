import React, { ReactNode, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface FadeProps {
  show: boolean;
  children: ReactNode;
}

const Fade: React.FC<FadeProps> = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    <>
      {render && (
        <StyledFade show={show} onAnimationEnd={onAnimationEnd}>
          {children}
        </StyledFade>
      )}
    </>
  );
};

export default Fade;

const StyledFade = styled.div<{ show: boolean }>`
  overflow: hidden;
  animation: ${props => (props.show ? fadeIn : fadeOut)} 0.3s linear forwards;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;
