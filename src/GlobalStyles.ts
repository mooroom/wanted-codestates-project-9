import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html {scroll-behavior: smooth;}
  html, body {width: 100%; height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;};
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  ul {list-style: none}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`;

export default GlobalStyles;
