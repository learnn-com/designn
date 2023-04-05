export { createTheme } from './createTheme'
export { GlobalStyle } from './GlobalStyle'
export type { Theme, ThemeOptions } from './Theme'

import { createTheme } from './createTheme'

export const defaultTheme = createTheme({ name: 'default' })
