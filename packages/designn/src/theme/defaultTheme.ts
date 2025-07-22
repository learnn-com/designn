import { colors } from './tokens/colors'
import { responsive } from './tokens/responsive'
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography'
import { breakpointsScale } from './tokens/breakpoints'
import { borders } from './tokens/borders'
import { DefaultTheme } from 'styled-components'
import { Theme } from './Theme'

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


export const aiPurpleTheme: Theme = {
  ...defaultTheme,
  colors: {
      ...defaultTheme.colors,
      interaction_background: {
          ...defaultTheme.colors.interaction_background,
          primary_active: 'rgba(53, 27, 77, 1)',
          primary_hover: 'rgba(86, 55, 122, 1)',
          secondary_active: 'transparent',
          secondary_hover: 'transparent'
      },
      interaction_foreground: {
          ...defaultTheme.colors.interaction_foreground,
          primary_active: 'rgba(255, 255, 255, 1)',
          primary_hover: 'rgba(255, 255, 255, 1)',
          secondary_active: 'rgba(230, 216, 246, 1)',
          secondary_hover: 'rgba(255, 255, 255, 1)'
      },
      interaction_outline: {
          ...defaultTheme.colors.interaction_outline,
          primary_active: 'rgba(109, 84, 138, 1)',
          primary_hover: 'rgba(138, 97, 186, 1)',
          secondary_active: 'rgba(109, 84, 138, 1)',
          secondary_hover: 'rgba(139, 97, 186, 1)'
      },
      text: {
          ...defaultTheme.colors.text,
          primary_inverted: 'rgba(255, 255, 255, 1)'
      }
  },  
}