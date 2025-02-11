import { DefaultTheme, ThemeProvider, StyleSheetManager } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../theme'
import isPropValid from '@emotion/is-prop-valid'

export type AppShellProps = { theme?: DefaultTheme; children: NonNullable<React.ReactNode> }

export const AppShell = ({ theme, children }: AppShellProps) => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme ?? defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
}

// Avoid forwarding props to html elements
function shouldForwardProp(propName: string, target: string | React.ComponentType<any>): boolean {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}
