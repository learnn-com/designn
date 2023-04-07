import { brandColors, Color } from '../../utils/colors'

export type ColorBackgroundAlias =
  | 'bg-app'
export type ColorBorderAlias =
  | 'border'
export type ColorTextAlias =
  | 'text'
  | 'text-primary'
export type ColorTokenName =
  | ColorBackgroundAlias
  | ColorBorderAlias
  | ColorTextAlias

export type Colors = {
  [TokenName in ColorTokenName]: Color;
}

export function createColors(): Colors {
  return {
    'bg-app': brandColors.backgroundColor,
    'border': brandColors.brand.primary,
    'text': brandColors.brand.accent,
    'text-primary': brandColors.brand.accent,
  }
}
