import { brandColors, Color, green, red, gray, orange } from '../../utils/colors'

export type ColorBorderAlias = 'border'
export type ColorInteractionAlias =
  | 'primary_active'
  | 'secondary_active'
  | 'tertiary_active'
  | 'flat_active'
  | 'primary_hover'
  | 'secondary_hover'
  | 'tertiary_hover'
  | 'flat_hover'
  | 'primary_disabled'
  | 'secondary_disabled'
  | 'tertiary_disabled'
  | 'flat_disabled'

export type ColorTextAlias =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'dimmed'
  | 'primary_inverted'

export type TextColors = {
  [TokenName in ColorTextAlias]: Color
}

export type InteractionColors = {
  [TokenName in ColorInteractionAlias]: Color
}

export type Colors = {
  bg_app: Color
  border: Color
  edge: Color
  outline: Color
  text: TextColors
  interaction_background: InteractionColors
  interaction_foreground: InteractionColors
  interaction_outline: InteractionColors
  item_active: Color
  item_hover: Color
  card_background: Color
  card_border: Color
  code: Color
  modal_background: Color
}

export const colors: Colors = {
  bg_app: brandColors.backgroundColor,
  border: brandColors.brand.primary,
  edge: gray[800],
  outline: gray[500],
  text: {
    base: brandColors.textColor,
    secondary: gray[300],
    dimmed: gray[500],
    primary: brandColors.brand.primary,
    primary_inverted: brandColors.brand.accent,
    error: red[500],
    success: green[500],
  },
  interaction_background: {
    primary_active: brandColors.brand.primary,
    secondary_active: brandColors.brand.accent,
    tertiary_active: brandColors.clear,
    flat_active: gray[700],
    primary_hover: gray[100],
    secondary_hover: brandColors.clear,
    tertiary_hover: brandColors.clear,
    flat_hover: gray[600],
    primary_disabled: gray[400],
    secondary_disabled: brandColors.clear,
    tertiary_disabled: brandColors.clear,
    flat_disabled: brandColors.clear,
  },
  interaction_foreground: {
    primary_active: gray[900],
    secondary_active: gray[50],
    tertiary_active: gray[50],
    flat_active: gray[50],
    primary_hover: gray[900],
    secondary_hover: gray[200],
    tertiary_hover: gray[200],
    flat_hover: gray[200],
    primary_disabled: gray[500],
    secondary_disabled: gray[500],
    tertiary_disabled: gray[500],
    flat_disabled: gray[500],
  },
  interaction_outline: {
    primary_active: brandColors.brand.primary,
    secondary_active: gray[700],
    tertiary_active: brandColors.clear,
    flat_active: brandColors.clear,
    primary_hover: gray[100],
    secondary_hover: gray[400],
    tertiary_hover: brandColors.clear,
    flat_hover: brandColors.clear,
    primary_disabled: gray[400],
    secondary_disabled: gray[500],
    tertiary_disabled: brandColors.clear,
    flat_disabled: brandColors.clear,
  },
  item_active: gray[800],
  item_hover: gray[600],
  card_background: brandColors.backgroundColor,
  card_border: gray[800],
  code: orange[500],
  modal_background: brandColors.modalBackground,
}
