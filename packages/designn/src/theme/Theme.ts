import { CSSProp } from 'styled-components'
import { Colors } from './tokens/colors'
import { Responsive } from './tokens/responsive'
import { Spacing } from './tokens/spacing'
import { Typography } from './tokens/createTypography'

export type ThemeOptions = { name: string; fontFamily?: string; baseFontSize?: number }

export interface Theme {
  name: string
  colors: Colors
  typography: Typography
  responsive: Responsive
  spacing: Spacing
  pattern: { disabled: CSSProp }
}
