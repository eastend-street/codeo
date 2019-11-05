import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Nav: React.FC = () => {
  return (
    <Container className="scroll-menu">
      <ul className="scroll-menu-inner">
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Ruby</li>
        <li>How to learn</li>
        <li>Carrer</li>
        <li>Most popular</li>
      </ul>
    </Container>
  );
};

export default Nav;
