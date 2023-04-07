import { CSSProp } from 'styled-components'
import { BrandColors, Colors } from './tokens/createColors'
import { Responsive } from './tokens/responsive'
import { Typography } from './tokens/createTypography'

export type ThemeOptions = {
  name: string
  fontFamily?: string
  baseFontSize?: number
  brandColors?: BrandColors
}
export type ResponsiveBreakpoint = `(max-width: ${number}px)`

export interface Theme {
  name: string
  color: Colors
  typography: Typography
  responsive: Responsive
  pattern: { disabled: CSSProp }
}
