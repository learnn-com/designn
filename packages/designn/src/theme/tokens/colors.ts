import { brandColors, Color } from '../../utils/colors'

export type ColorBackgroundAlias =
  | 'bg_app'
export type ColorBorderAlias =
  | 'border'
export type ColorTextAlias =
  | 'text'
  | 'text_primary'
export type ColorTokenName =
  | ColorBackgroundAlias
  | ColorBorderAlias
  | ColorTextAlias

export type Colors = {
  [TokenName in ColorTokenName]: Color;
}

export const colors: Colors = {
  bg_app: brandColors.backgroundColor,
  border: brandColors.brand.primary,
  text: brandColors.brand.accent,
  text_primary: brandColors.brand.accent

}
