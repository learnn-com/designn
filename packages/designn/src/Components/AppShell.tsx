import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle, Theme } from '../theme'

export type AppShellProps = { theme?: Theme; children: NonNullable<React.ReactNode> }

export const AppShell = ({ theme, children }: AppShellProps) => {
  return (
    <ThemeProvider theme={theme ?? defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
