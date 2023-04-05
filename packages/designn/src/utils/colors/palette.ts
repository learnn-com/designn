import { ColorRange, hex2RGB, Hexcode, RGB, RGB2Hex } from './hexRGB'

type ShadeOrTint = typeof rgbShade | typeof rgbTint

// shade one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 72, green: 16, blue: 18 }
//TODO: use HUE shift method https://medium.muz.li/natural-color-palettes-7769e5b38ecd
function rgbShade(rgb: RGB, i: number): RGB {
  return {
    r: rgb.r * (1 - 0.1 * i),
    g: rgb.g * (1 - 0.1 * i),
    b: rgb.b * (1 - 0.1 * i)
  }
}

// tint one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 98, green: 42, blue: 44 }
//TODO: use HUE shift method https://medium.muz.li/natural-color-palettes-7769e5b38ecd
function rgbTint(rgb: RGB, i: number): RGB {
  return {
    r: rgb.r + (255 - rgb.r) * i * 0.1,
    g: rgb.g + (255 - rgb.g) * i * 0.1,
    b: rgb.b + (255 - rgb.b) * i * 0.1
  }
}

// take a hex color string and produce a list of 10 tints or shades of that color
// shadeOrTint should be either `rgbShade` or `rgbTint`, as defined above
// this allows us to use `calculate` for both shade and tint
function calculate(hexcode: Hexcode, shadeOrTint: ShadeOrTint): Hexcode[] {
  const color = hex2RGB(hexcode)
  let shadeValues: Hexcode[] = []

  for (var i = 0; i < 10; i++) {
    shadeValues[i] = RGB2Hex(shadeOrTint(color, i))
  }
  return shadeValues
}

// given a color value, return an array of ten shades in 10% increments
export function calculateShades(hexcode: Hexcode) {
  return calculate(hexcode, rgbShade).concat('#000000')
}

// given a color value, return an array of ten tints in 10% increments
export function calculateTints(hexcode: Hexcode) {
  return calculate(hexcode, rgbTint).concat('#ffffff')
}

export function calculatePalette(hexcode: Hexcode): ColorRange {
  const rgb = hex2RGB(hexcode)
  return [
    RGB2Hex(rgbTint(rgb, 9)),
    RGB2Hex(rgbTint(rgb, 5)),
    hexcode,
    RGB2Hex(rgbShade(rgb, 2)),
    RGB2Hex(rgbShade(rgb, 6))
  ]
}

function colorChannelMixer(colorChannelA: number, colorChannelB: number, amountToMix: number) {
  if (amountToMix > 1 || amountToMix < 0) {
    throw new Error('amount to mix ranges from 0.0 to 1.0')
  }
  const channelA = colorChannelA * amountToMix
  const channelB = colorChannelB * (1 - amountToMix)
  return channelA + channelB
}
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
export function colorMixer(rgbA: RGB, rgbB: RGB, amountToMix: number) {
  const r = colorChannelMixer(rgbA.r, rgbB.r, amountToMix)
  const g = colorChannelMixer(rgbA.g, rgbB.g, amountToMix)
  const b = colorChannelMixer(rgbA.b, rgbB.b, amountToMix)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
