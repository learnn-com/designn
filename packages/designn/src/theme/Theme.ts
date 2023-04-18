import { CSSProp, useTheme as useThemeSC } from 'styled-components'
import { Colors } from './tokens/colors'
import { Responsive } from './tokens/responsive'
import { Spacing } from './tokens/spacing'
import { Typography } from './tokens/typography'
import { Borders } from './tokens/borders'
import { BreakpointsScale } from './tokens/breakpoints'


export interface Theme {
  colors: Colors
  typography: Typography
  responsive: Responsive
  breakpoints: BreakpointsScale
  spacing: Spacing
  borders: Borders
  pattern: { disabled: CSSProp }
}

export const useTheme: () => Theme = useThemeSC;