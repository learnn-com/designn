import { CSSProp } from 'styled-components'
import { Colors } from './tokens/colors'
import { Responsive } from './tokens/responsive'
import { Spacing } from './tokens/spacing'
import { Typography } from './tokens/typography'
import { Borders } from './tokens/borders'


export interface Theme {
  colors: Colors
  typography: Typography
  responsive: Responsive
  spacing: Spacing
  borders: Borders
  pattern: { disabled: CSSProp }
}
