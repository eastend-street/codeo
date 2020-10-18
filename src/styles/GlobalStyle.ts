import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    color: #fff;
    background-color: #232c3b;
    h1, h2, h3, h4 {
      font-weight: normal;
    }
    a {
      text-decoration: none;
      color: inherit;
      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    }
  }
`;

export default GlobalStyle;
