import { DefaultTheme, ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../theme'

export type AppShellProps = { theme?: DefaultTheme; children: NonNullable<React.ReactNode> }

export const AppShell = ({ theme, children }: AppShellProps) => {
  return (
    <ThemeProvider theme={theme ?? defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
