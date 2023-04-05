import { RGB } from './hexRGB'

export type HSL = { h: number; s: number; l: number }

const ColorLength = 255
const MaxDegree = 360
export function RGB2HSL(rgb: RGB): HSL {
  const r = rgb.r / ColorLength
  const g = rgb.g / ColorLength
  const b = rgb.b / ColorLength
  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  const delta = max - min
  let h = 0
  let s = 0

  if (max === min) {
    h = 0
  } else if (r === max) {
    h = (g - b) / delta
  } else if (g === max) {
    h = 2 + (b - r) / delta
  } else if (b === max) {
    h = 4 + (r - g) / delta
  }

  h = Math.round(Math.min(h * 60, MaxDegree))

  if (h < 0) {
    h += MaxDegree
  }

  const l = (min + max) / 2

  if (max === min) {
    s = 0
  } else if (l <= 0.5) {
    s = delta / (max + min)
  } else {
    s = delta / (2 - max - min)
  }

  return { h, s: Math.round(s * 100), l: Math.round(l * 100) }
}

export function HSL2RGB(hsl: HSL): RGB {
  const h = hsl.h / MaxDegree
  const s = hsl.s / 100
  const l = hsl.l / 100
  let t2
  let val

  if (s === 0) {
    val = Math.round(l * ColorLength)
    return { r: val, g: val, b: val }
  }

  if (l < 0.5) {
    t2 = l * (1 + s)
  } else {
    t2 = l + s - l * s
  }

  const t1 = 2 * l - t2

  const result: number[] = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    let t3 = h + (1 / 3) * -(i - 1)
    if (t3 < 0) {
      t3++
    }

    if (t3 > 1) {
      t3--
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3
    } else if (2 * t3 < 1) {
      val = t2
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    } else {
      val = t1
    }

    result[i] = Math.round(val * 255)
  }

  return {
    r: result[0],
    g: result[1],
    b: result[2]
  }
}
