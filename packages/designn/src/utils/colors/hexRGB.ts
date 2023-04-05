export type Hexcode = `#${string}` | 'transparent'
export type ColorRange = [Hexcode, Hexcode, Hexcode, Hexcode, Hexcode]

export type RGB = { r: number; g: number; b: number }
export type RGBA = RGB & { a: number }

// convert a hex string into an object with red, green, blue numeric properties
// '#501214' => { red: 80, green: 18, blue: 20 }
export function hex2RGB(colorValue: Hexcode): RGB {
  if (colorValue.length !== 7) {
    return { r: 255, g: 255, b: 255 }
  }
  const value = colorValue.slice(1)
  return {
    r: parseInt(value.substring(0, 2), 16),
    g: parseInt(value.substring(2, 4), 16),
    b: parseInt(value.substring(4, 6), 16)
  }
}

// convert one of our rgb color objects to a full hex color string
// { red: 80, green: 18, blue: 20 } => '#501214'
export function RGB2Hex(rgb: RGB): Hexcode {
  return ('#' + intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b)) as Hexcode
}

export function hex2RGBAString(hexcode: Hexcode, opacity: number): string {
  const alpha = (isNaN(opacity) ? 100 : opacity) / 100
  if (hexcode.length === 7) {
    const rgb = hex2RGB(hexcode)
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
  }

  const hex = hexcode.replace('#', '')
  const rd = hex.slice(0, 1) + hex.slice(0, 1)
  const gd = hex.slice(1, 2) + hex.slice(1, 2)
  const bd = hex.slice(2, 3) + hex.slice(2, 3)
  const r = parseInt(rd, 16)
  const g = parseInt(gd, 16)
  const b = parseInt(bd, 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function decimalToHex(decimalValue: number) {
  return decimalValue.toString(16)
}

export function hexToDecimal(hexValue: Hexcode) {
  return parseInt(hexValue, 16)
}

export function isHexColor(hex: string) {
  return hexColorRegex({ strict: true }).test(hex)
}

function hexColorRegex(options: { strict: boolean }) {
  return options.strict
    ? /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i
    : /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi
}

// pad a hexadecimal string with zeros if it needs it
function pad(number: string, length: number): Hexcode {
  var str = '' + number
  while (str.length < length) {
    str = '0' + str
  }
  return str as Hexcode
}

// convert an integer to a 2-char hex string
// for sanity, round it and ensure it is between 0 and 255
// 43 => '2b'
function intToHex(rgbint: number) {
  return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2)
}
