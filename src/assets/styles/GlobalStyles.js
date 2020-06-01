import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: ${({ theme }) => theme.beVietnam}
  }
  
  ul, li, h1, h2, h3, p, button {
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
