import { createGlobalStyle } from 'styled-components'
import MessinaSansLight from '../fonts/MessinaSans-Light.woff2'
import MessinaSansRegular from '../fonts/MessinaSans-Regular.woff2'
import MessinaSansSemiBold from '../fonts/MessinaSans-SemiBold.woff2'
import MessinaSansBold from '../fonts/MessinaSans-Bold.woff2'
import MessinaSansBlack from '../fonts/MessinaSans-Black.woff2'

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Messina Sans';
      src: url(${MessinaSansLight}) format('woff2')
      font-weight: 300;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url(${MessinaSansRegular}) format('woff2')
      font-weight: 400;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url(${MessinaSansSemiBold}) format('woff2')
      font-weight: 600;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url(${MessinaSansBold}) format('woff2')
      font-weight: 700;
    }
    @font-face {
      font-family: 'Messina Sans';
      src: url(${MessinaSansBlack}) format('woff2')
      font-weight: 800;
    }
  
    body {
        font-family: ${({ theme }) => theme.typography.font_family};
        font-size: ${({ theme }) => theme.typography.font_size_base};
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
