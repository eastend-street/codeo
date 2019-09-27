import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <StyledFooter>
      <p>&copy; Jun Yamada 2018-2019 All rights reserved.</p>
    </StyledFooter>
  );
};

export default App;
