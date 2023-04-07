type FontFamilyAlias =
  | 'light'
  | 'regular'
  | 'semi_bold'
  | 'bold'
  | 'black'

export type FontSizeScale =
  | 'base'
  | '75'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700';

export type FontLineHeightScale = '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type FontWeightAlias = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyKeys =
  | `font_family_${FontFamilyAlias}`
  | `font_size_${FontSizeScale}`
  | `font_weight_${FontWeightAlias}`
  | `font_line_height_${FontLineHeightScale}`;

export type Typography = {
  [Key in TypographyKeys]: string;
};

export const typography: Typography = {
  font_family_light: "MessinaSans Light, Roboto",
  font_family_regular: 'MessinaSans Regular, Roboto',
  font_family_semi_bold: "MessinaSans SemiBold, Roboto",
  font_family_bold: "MessinaSans Bold, Roboto",
  font_family_black: "MessinaSans Black, Roboto",
  font_size_base: '16px',
  font_size_75: '1rem',
  font_size_100: '2rem',
  font_size_200: '3rem',
  font_size_300: '4rem',
  font_size_400: '24px',
  font_size_500: '28px',
  font_size_600: '32px',
  font_size_700: '40px',
  font_weight_regular: '400',
  font_weight_medium: '500',
  font_weight_semibold: '600',
  font_weight_bold: '700',
  font_line_height_1: '16px',
  font_line_height_2: '20px',
  font_line_height_3: '24px',
  font_line_height_4: '28px',
  font_line_height_5: '32px',
  font_line_height_6: '40px',
  font_line_height_7: '48px',
};
