import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-weight: 400;
  }

  #root {
    height: 100vh;
  }
`