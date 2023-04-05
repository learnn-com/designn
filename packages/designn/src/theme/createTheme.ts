import { defaultTheme } from '.'
import { createColors } from './createColors'
import { createResponsive } from './createResponsive'
import { createTypography } from './createTypography'
import { ThemeOptions, Theme } from './Theme'

const defaultDisableOpacity = 0.3

export function createTheme(options?: ThemeOptions): Theme {
  if (!options) {
    return defaultTheme
  }
  const responsive = createResponsive()
  const color = createColors(options.brandColors)
  return {
    name: options.name,
    color,
    typography: createTypography(responsive, options.fontFamily, options.baseFontSize),
    responsive,
    pattern: {
      disabled: {
        opacity: defaultDisableOpacity,
        cursor: 'normal'
      }
    } 
  }
}
