import { CSSProp } from 'styled-components'
import { Colors } from './tokens/colors'
import { Responsive } from './tokens/responsive'
import { Spacing } from './tokens/spacing'
import { Typography } from './tokens/typography'


export interface Theme {
  colors: Colors
  typography: Typography
  responsive: Responsive
  spacing: Spacing
  pattern: { disabled: CSSProp }
}
