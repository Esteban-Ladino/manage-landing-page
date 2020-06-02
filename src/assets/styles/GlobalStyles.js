import { createGlobalStyle } from 'styled-components'
import icomoon from '../fonts/icomoon.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "icomoon";
      src: url(${icomoon});
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: ${({ theme }) => theme.beVietnam}
  }
  
  ul, li, h1, h2, h3, h4, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  figure {
    margin: 0;
  }
`
