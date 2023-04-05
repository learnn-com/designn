import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.typography.family};
        font-size: ${({ theme }) => theme.typography.baseFontSize}px;
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
