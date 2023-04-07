import { defaultTheme } from '.'
import { createColors } from './tokens/createColors'
import { responsive } from './tokens/responsive'
import { spacing } from './tokens/spacing'
import { createTypography } from './tokens/createTypography'
import { ThemeOptions, Theme } from './Theme'

const defaultDisableOpacity = 0.3

export function createTheme(options?: ThemeOptions): Theme {
  if (!options) {
    return defaultTheme
  }

  const color = createColors(options.brandColors)
  return {
    name: options.name,
    color,
    typography: createTypography(responsive, options.fontFamily, options.baseFontSize),
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
