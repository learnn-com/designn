import { brandColors, Color, green, red, gray } from '../../utils/colors'

export type ColorBorderAlias = 'border'
export type ColorInteractionAlias =
  | 'primary_active'
  | 'secondary_active'
  | 'tertiary_active'
  | 'primary_hover'
  | 'secondary_hover'
  | 'tertiary_hover'
  | 'primary_disabled'
  | 'secondary_disabled'
  | 'tertiary_disabled'

export type ColorTextAlias = 'base' | 'primary' | 'error' | 'success' | 'dimmed'

export type TextColors = {
  [TokenName in ColorTextAlias]: Color
}

export type InteractionColors = {
  [TokenName in ColorInteractionAlias]: Color
}

export type Colors = {
  bg_app: Color
  border: Color
  text: TextColors
  interaction_background: InteractionColors
  interaction_foreground: InteractionColors
  interaction_outline: InteractionColors
  feature_card_background: Color
  feature_card_border: Color
}

export const colors: Colors = {
  bg_app: brandColors.backgroundColor,
  border: brandColors.brand.primary,
  text: {
    base: brandColors.brand.primary,
    dimmed: gray[500],
    primary: brandColors.brand.primary,
    error: red[500],
    success: green[500],
  },
  interaction_background: {
    primary_active: brandColors.brand.primary,
    secondary_active: brandColors.clear,
    tertiary_active: brandColors.clear,
    primary_hover: gray[100],
    secondary_hover: brandColors.clear,
    tertiary_hover: brandColors.clear,
    primary_disabled: gray[400],
    secondary_disabled: brandColors.clear,
    tertiary_disabled: brandColors.clear,
  },
  interaction_foreground: {
    primary_active: gray[900],
    secondary_active: gray[50],
    tertiary_active: gray[50],
    primary_hover: gray[900],
    secondary_hover: gray[200],
    tertiary_hover: gray[200],
    primary_disabled: gray[500],
    secondary_disabled: gray[500],
    tertiary_disabled: gray[500],
  },
  interaction_outline: {
    primary_active: brandColors.brand.primary,
    secondary_active: gray[700],
    tertiary_active: brandColors.clear,
    primary_hover: gray[100],
    secondary_hover: gray[400],
    tertiary_hover: brandColors.clear,
    primary_disabled: gray[400],
    secondary_disabled: gray[500],
    tertiary_disabled: brandColors.clear,
  },
  feature_card_background: gray[800],
  feature_card_border: gray[500]
}
