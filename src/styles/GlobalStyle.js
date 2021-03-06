import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  a {
    text-decoration: none,
  }
`;

export default GlobalStyles;
