import { CSSProp } from 'styled-components'
import { BrandColors, Colors } from './createColors'
import { Responsive } from './createResponsive'
import { Typography } from './createTypography'

export type ThemeOptions = { name: string; fontFamily?: string; baseFontSize?: number; brandColors?: BrandColors }
export type ResponsiveBreakpoint = `(max-width: ${number}px)`

export interface Theme {
  name: string
  color: Colors
  typography: Typography
  responsive: Responsive
  pattern: { disabled: CSSProp }
}
