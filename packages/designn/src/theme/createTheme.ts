import { colors } from './tokens/colors'
import { responsive } from './tokens/responsive'
import { spacing } from './tokens/spacing'
import { Theme } from './Theme'
import { typography } from './tokens/typography'
import { borders } from './tokens/borders'

const defaultDisableOpacity = 0.3

export function createTheme(): Theme {
  return {
    colors,
    typography,
    responsive,
    spacing,
    borders,
    pattern: {
      disabled: {
        opacity: defaultDisableOpacity,
        cursor: 'normal',
      },
    },
  }
}
