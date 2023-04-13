import { brandColors, Color, green, red, gray } from '../../utils/colors'

export type ColorBackgroundAlias = 'bg_app'
export type ColorBorderAlias = 'border'
export type ColorTextAlias = 'text' | 'text_primary' | 'text_error' | 'text_success' | 'text_dimmed'
export type ColorTokenName = ColorBackgroundAlias | ColorBorderAlias | ColorTextAlias

export type Colors = {
  [TokenName in ColorTokenName]: Color
}

export const colors: Colors = {
  bg_app: brandColors.backgroundColor,
  border: brandColors.brand.primary,
  text: brandColors.brand.primary,
  text_dimmed: gray[500],
  text_primary: brandColors.brand.primary,
  text_error: red[500],
  text_success: green[500],
}
