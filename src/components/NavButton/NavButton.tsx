import React from "react";
import styled from "styled-components";

type NavButtonProps = {
  label: string;
};

const NavButton: React.FC<NavButtonProps> = props => {
  return <div>{props.label}</div>;
};

export default NavButton;
