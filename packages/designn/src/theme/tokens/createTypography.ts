import { CSSProp } from 'styled-components'
import { Responsive } from './responsive'
// import { Responsive } from './createResponsive'

type Scale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type TextBlock = CSSProp
type FontSize = `${number}rem`

const defaultFontFamily = `"'Roboto' sans-serif"`
const defaultBaseFontSize = 16

const fontScaleRatio = 1.5
const fontModularSize: (scale: number, ratio?: number) => FontSize = (scale, ratio) => {
  return `${Math.pow(ratio ?? fontScaleRatio, scale)}rem`
}

export type Typography = {
  family: string
  baseFontSize: number
  title1: TextBlock
  title2: TextBlock
  title3: TextBlock
  textLarge: TextBlock
  textRegular: TextBlock
  textSmall: TextBlock
  textMicro: TextBlock
  textReset: TextBlock
  weights: {
    thin: Scale
    light: Scale
    medium: Scale
    semibold: Scale
    bold: Scale
    black: Scale
  }
}

const ratios = {
  tablet: 1.362,
  large: 1.2575,
  small: 1.208,
}

const responsiveFontSize: (scale: number, responsive: Responsive) => CSSProp = (
  scale,
  responsive,
) => `
  font-size: ${fontModularSize(scale, ratios.small)};
  ${responsive.medium_up} {
    font-size: ${fontModularSize(scale, ratios.large)};
  }
  ${responsive.large_up} {
    font-size: ${fontModularSize(scale, ratios.tablet)};
  }
`

export function createTypography(
  responsive: Responsive,
  fontFamily?: string,
  baseFontSize?: number,
): Typography {
  const family = fontFamily ?? defaultFontFamily
  const fontSize = baseFontSize ?? defaultBaseFontSize
  return {
    family,
    baseFontSize: fontSize,
    title1: `
      font-family: ${family};
      font-weight: bold;
      
      ${responsiveFontSize(4, responsive)}

      line-height: 1.25;
      padding-top: 8px;
      padding-bottom: 8px;
      letter-spacing: -0.8px;
      `,
    title2: `
      font-family: ${family};
      font-weight: bold;
   
      ${responsiveFontSize(3, responsive)}
      
      line-height: 1.25;
      padding-top: 6px;
      padding-bottom: 6px;
      letter-spacing: -0.6px;
      `,

    title3: `
      font-family: ${family};
      font-weight: bold;
       
      ${responsiveFontSize(2, responsive)}
      
      line-height: 1.25;
      padding-top: 2px;
      padding-bottom: 2px;
      letter-spacing: -0.4px;
    `,
    textLarge: `
      font-family: ${family};
    
      ${responsiveFontSize(1, responsive)}
    
      line-height: 1.5;
      letter-spacing: -0.2px;
      `,

    textRegular: `
      font-family: ${family};
    
      ${responsiveFontSize(0, responsive)}
    
      line-height: 1.5;
      letter-spacing: 0.1px;
      `,

    textSmall: `
      font-family: ${family};
    
      ${responsiveFontSize(-1, responsive)}
    
      line-height: 1.5;
      letter-spacing: 0.2px;
      `,

    textMicro: `
      font-family: ${family};
    
      ${responsiveFontSize(-2, responsive)}
    
      line-hieght: 1.5;
      letter-spacing: 0.3px;
      `,

    textReset: `
      padding: 0;
      margin: 0;
      font-weight: normal;
      word-wrap: break-word;
      display: block;
      `,

    weights: {
      thin: 100,
      light: 300,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  }
}
