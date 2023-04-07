import { CSSProp } from 'styled-components'
import { Colors } from './tokens/createColors'
import { Responsive } from './tokens/createResponsive';
import { Typography } from './tokens/createTypography';

export type ThemeOptions = { name: string; fontFamily?: string; baseFontSize?: number }

export interface Theme {
  name: string
  color: Colors
  typography: Typography
  responsive: Responsive
  pattern: { disabled: CSSProp }
}
