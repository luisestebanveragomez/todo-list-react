import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      line-height: 1.45;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: auto;
  }

  #__next {
      /*
          Create a staking context, without a z-index
          this ensures that all portal content (modals & tooltips) will
          float above the Next app.
      */
      isolation: isolate;
  }

  body {
      color: var(--color-text);
      background: var(--color-backgorud);
  }

  a:focus {
      outline: 5px auto var(--color-primary);
  }

  body, input, button, select, option {
      font-family: var(--font-family);
      font-weight: var(--font-weight-light);
  }

  h1, h2, h3, h4, h5, h5, strong {
      font-weight: var(--font-weight-bold);
  }

  h1, h2. h3, h4, h5, h6, p {
      text-rendering: optimizeLegibility;
  }

  p {
      margin-bottom: 1.5em;
      font-size: 1.125rem;
  }

  em {
      font-style: italic;
  }

  strong {
      font-weight: var(--font-weight-medium);
  }

  ::selection {
      background-color: var(--color-primary);
      color: white;
  }

  @media (orientation: landscape) {
      ::-webkit-scrollbar {
          width: 9px;
          height: 11px;
          background-color: transparent;
      }

      ::-webkit-scrollbar-track {
          border-radius: 3px;
          background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: var(--color-gray-300);
          border: 2px solid var(--color-background);
      }
  }

  /* third-party overrrides */
  .video-js .vjs-big-play-button {
      top: 0 !important;
      left: 0 !important;
      bottom: 0 !important;
      right: 0 !important;
      border: 1px solid rgba(255, 255, 255, 0.25) !important;
      background-color: rgba(0, 0, 0, 0.4) !important;
  }

  .video-js .vjs-play-progress:before {
      top: -0.6em !important;
  }

  .vjs-slider-horizontal- .vjs-volume-level:before {
      top: -0.6em !important;
  }


  :root {
    --color-primary: hsl(215, 50%, 23%);
    --color-text: hsl(215, 50%, 23%);
    --color-secundary: hsl(203, 39%, 44%);
    --color-threeth: hsl(182, 43%, 76%);
    --color-error: hsl(355, 78%, 56%);
    --background: hsl(105, 55%, 96%);
    --font-weight-bold: bold;
    --font-family: arial;
  }


  html {
    background: var(--color-threeth);

  }

`;

export default GlobalStyle;