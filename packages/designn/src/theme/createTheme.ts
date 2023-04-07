import { colors } from './tokens/colors'
import { responsive } from './tokens/responsive'
import { spacing } from './tokens/spacing'
import { Theme } from './Theme'
import { typography } from './tokens/typography'

const defaultDisableOpacity = 0.3

export function createTheme(): Theme {
  return {
    colors,
    typography,
    responsive,
    spacing,
    pattern: {
      disabled: {
        opacity: defaultDisableOpacity,
        cursor: 'normal',
      },
    },
  }
}
