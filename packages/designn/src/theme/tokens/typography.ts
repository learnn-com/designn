export type FontSizeScale = 'base' | '75' | '100' | '200' | '300' | '400' | '500' | '600' | '700'

export type FontLineHeightScale = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export type FontWeightAlias = 'light' | 'regular' | 'semibold' | 'bold' | 'black'

export type TypographyKeys =
  | `font_family`
  | `font_size_${FontSizeScale}`
  | `font_weight_${FontWeightAlias}`
  | `font_line_height_${FontLineHeightScale}`

export type Typography = {
  [Key in TypographyKeys]: string
}

export const typography: Typography = {
  font_family: 'Messina Sans, sans-serif',
  font_size_base: '1rem',
  font_size_75: '0.75rem',
  font_size_100: '0.875rem',
  font_size_200: '1rem',
  font_size_300: '1.25rem',
  font_size_400: '1.5rem',
  font_size_500: '1.75rem',
  font_size_600: '2rem',
  font_size_700: '2.5rem',
  font_weight_light: '300',
  font_weight_regular: '400',
  font_weight_semibold: '600',
  font_weight_bold: '700',
  font_weight_black: '800',
  font_line_height_1: '1rem',
  font_line_height_2: '1.25rem',
  font_line_height_3: '1.5rem',
  font_line_height_4: '1.75rem',
  font_line_height_5: '2rem',
  font_line_height_6: '2.5rem',
  font_line_height_7: '3rem',
}
