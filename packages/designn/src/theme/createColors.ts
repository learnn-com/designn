import { Hexcode, ColorRange, calculatePalette } from '../utils/colors'

export type BrandColors = [Hexcode, Hexcode]

export type Colors = {
  brand: { primary: ColorRange; accent: ColorRange }
  gray: ColorRange
  feedback: { success: ColorRange; info: ColorRange; warning: ColorRange; danger: ColorRange }
  clear: Hexcode
  muted: Hexcode
}

const defaultBrandColors: BrandColors = ['#3366FF', '#fac748']
const defaultNeutralColor = '#6a707f'
const defaultSuccessColor = '#67BC1C'
const defaultInfoColor = '#0FADFC'
const defaultWarningColor = '#FFBB35'
const defaultDangerColor = '#FF4A26'

const defaultMutedColor = '#767676'

export function createColors(brandColors?: BrandColors): Colors {
  const brandColor: BrandColors = brandColors ?? defaultBrandColors
  const gray = calculatePalette(defaultNeutralColor) //TODO: adjust color based on primary brand
  return {
    brand: {
      primary: calculatePalette(brandColor[0]),
      accent: calculatePalette(brandColor[1])
    },
    gray,
    feedback: {
      success: calculatePalette(defaultSuccessColor), //TODO: adjust color based on primary brand
      info: calculatePalette(defaultInfoColor), //TODO: adjust color based on primary brand
      warning: calculatePalette(defaultWarningColor), //TODO: adjust color based on primary brand
      danger: calculatePalette(defaultDangerColor) //TODO: adjust color based on primary brand
    },
    muted: defaultMutedColor, //https://artincontext.org/muted-colors/
    clear: 'transparent'
  }
}
