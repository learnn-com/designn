import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Messina Sans';
      src: url('../fonts/MessinaSans-Black.woff2') format('woff2')
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url('../fonts/MessinaSans-Bold.woff2') format('woff2')
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url('../fonts/MessinaSans-SemiBold.woff2') format('woff2')
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url('../fonts/MessinaSans-Regular.woff2') format('woff2')
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url('../fonts/MessinaSans-Light.woff2') format('woff2')
      font-weight: 300;
      font-style: normal;
    }

    body {
        font-family: ${({ theme }) => theme.typography.font_family};
        font-size: ${({ theme }) => theme.typography.font_size_base};
        font-weight:400;
        min-width:100vw;
        min-height:100vh;
        margin:0;
        padding: 0;
    }
    /* html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
        min-height:100vh;
        min-width:100vw;
        margin: 0;
        padding: 0; 
    } 
}*/
`
