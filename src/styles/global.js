import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text.primary};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.primary};
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.secondary};
  border-radius: 25px;
}
`;

export default GlobalStyles;
