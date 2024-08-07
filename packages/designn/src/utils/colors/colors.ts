import { Color } from './types'

type ColorScales = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

type ColorScale = {
  [Scale in ColorScales]: Color
}

export const gray: ColorScale = {
  50: '#ffffff',
  100: 'rgba(233, 234, 239, 1)',
  200: '#D0D5DE',
  300: 'rgba(174, 180, 187, 1)',
  400: 'rgba(141, 144, 152, 1)',
  500: '#696C73',
  600: '#46474D',
  700: '#37393E',
  800: '#27272C',
  900: '#121214',
}

export const green: ColorScale = {
  50: 'rgba(240, 253, 248, 1)',
  100: 'rgba(224, 248, 238, 1)',
  200: 'rgba(192, 242, 221, 1)',
  300: 'rgba(161, 237, 208, 1)',
  400: 'rgba(80, 220, 169, 1)',
  500: 'rgba(35, 196, 140, 1)',
  600: 'rgba(22, 166, 121, 1)',
  700: 'rgba(0, 122, 92, 1)',
  800: 'rgba(18, 84, 67, 1)',
  900: 'rgba(12, 59, 47, 1)',
}

export const blue: ColorScale = {
  50: 'rgba(240, 245, 253, 1)',
  100: 'rgba(232, 240, 253, 1)',
  200: 'rgba(187, 212, 247, 1)',
  300: 'rgba(147, 186, 241, 1)',
  400: 'rgba(102, 153, 225, 1)',
  500: 'rgba(62, 125, 213, 1)',
  600: 'rgba(36, 99, 188, 1)',
  700: 'rgba(20, 73, 149, 1)',
  800: 'rgba(14, 53, 108, 1)',
  900: 'rgba(16, 41, 76, 1)',
}

export const red: ColorScale = {
  50: 'rgba(254, 243, 241, 1)',
  100: 'rgba(253, 226, 221, 1)',
  200: 'rgba(251, 197, 188, 1)',
  300: 'rgba(247, 148, 130, 1)',
  400: 'rgba(245, 107, 82, 1)',
  500: '#FE5454',
  600: 'rgba(197, 40, 12, 1)',
  700: 'rgba(159, 32, 10, 1)',
  800: 'rgba(115, 24, 7, 1)',
  900: 'rgba(67, 14, 4, 1)',
}

export const yellow: ColorScale = {
  50: 'rgba(254, 248, 236, 1)',
  100: 'rgba(252, 240, 212, 1)',
  200: 'rgba(250, 229, 178, 1)',
  300: 'rgba(248, 217, 144, 1)',
  400: 'rgba(245, 196, 82, 1)',
  500: 'rgba(242, 179, 34, 1)',
  600: 'rgba(216, 155, 13, 1)',
  700: 'rgba(183, 126, 11, 1)',
  800: 'rgba(135, 92, 8, 1)',
  900: 'rgba(77, 46, 5, 1)',
}

export const teal: ColorScale = {
  50: 'rgba(238, 250, 251, 1)',
  100: 'rgba(222, 245, 247, 1)',
  200: 'rgba(184, 233, 239, 1)',
  300: 'rgba(147, 222, 231, 1)',
  400: 'rgba(109, 211, 222, 1)',
  500: 'rgba(59, 195, 211, 1)',
  600: 'rgba(42, 172, 187, 1)',
  700: 'rgba(32, 130, 141, 1)',
  800: 'rgba(23, 92, 100, 1)',
  900: 'rgba(16, 65, 71, 1)',
}

export const orange: ColorScale = {
  50: 'rgba(254, 243, 236, 1)',
  100: 'rgba(253, 231, 217, 1)',
  200: 'rgba(250, 201, 168, 1)',
  300: 'rgba(247, 177, 130, 1)',
  400: 'rgba(245, 147, 82, 1)',
  500: '#e8b63e',
  600: 'rgba(216, 101, 13, 1)',
  700: 'rgba(164, 76, 10, 1)',
  800: 'rgba(111, 52, 7, 1)',
  900: 'rgba(77, 36, 5, 1)',
}

export const purple: ColorScale = {
  50: 'rgba(242, 237, 253, 1)',
  100: 'rgba(236, 227, 253, 1)',
  200: 'rgba(226, 214, 250, 1)',
  300: 'rgba(203, 180, 248, 1)',
  400: 'rgba(173, 139, 241, 1)',
  500: 'rgba(121, 69, 227, 1)',
  600: 'rgba(90, 36, 205, 1)',
  700: 'rgba(67, 21, 158, 1)',
  800: 'rgba(49, 13, 120, 1)',
  900: 'rgba(36, 8, 73, 1)',
}

type BrandColor = {
  brand: { primary: Color; accent: Color }
  backgroundColor: Color
  modalBackground: Color
  textColor: Color
  clear: Color
  muted: Color
}
export const brandColors: BrandColor = {
  brand: {
    primary: '#ffffff',
    accent: '#000000',
  },
  modalBackground: '#19191c',
  textColor: '#E7E9EA',
  backgroundColor: gray[900],
  muted: '#767676', //https://artincontext.org/muted-colors/
  clear: 'transparent',
}
