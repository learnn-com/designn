import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${({ theme }: { theme: Theme }) => theme.typography['font-family-sans']};
        font-size: ${({ theme }: { theme: Theme }) => theme.typography['font-size-base']};
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
