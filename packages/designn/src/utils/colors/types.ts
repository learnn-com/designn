export type Hexcode = `#${string}`
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
export type RGB = `rgba(${number}, ${number}, ${number})`
export type Color = Hexcode | RGB | RGBA | 'transparent'
