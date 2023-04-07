import { CSSProp } from 'styled-components'
import { BrandColors, Colors } from './tokens/createColors'
import { Responsive } from './tokens/responsive'
import { Spacing } from './tokens/spacing'
import { Typography } from './tokens/createTypography'

export type ThemeOptions = {
  name: string
  fontFamily?: string
  baseFontSize?: number
  brandColors?: BrandColors
}

export interface Theme {
  name: string
  color: Colors
  typography: Typography
  responsive: Responsive
  spacing: Spacing
  pattern: { disabled: CSSProp }
}
