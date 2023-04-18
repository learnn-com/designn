import { colors } from './tokens/colors'
import { responsive } from './tokens/responsive'
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography'
import { breakpointsScale } from './tokens/breakpoints'
import { borders } from './tokens/borders'
import { DefaultTheme } from 'styled-components'

const defaultDisableOpacity = 0.3

export const defaultTheme: DefaultTheme = {
  colors,
  typography,
  responsive,
  spacing,
  borders,
  breakpoints: breakpointsScale,
  pattern: {
    disabled: {
      opacity: defaultDisableOpacity,
      cursor: 'normal'
    }
  },
}
