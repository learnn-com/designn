export type SpacingScale =
  | '0'
  | '025'
  | '05'
  | '08'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '8'
  | '10'
  | '12'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'

type SpaceUnit = `${number}rem`

export type SpacingKeys = `space_${SpacingScale}`

export type Spacing = {
  [Key in SpacingKeys]: SpaceUnit
}

export const spacing: Spacing = {
  space_0: '0rem',
  space_025: '0.0625rem',
  space_05: '0.125rem',
  space_08: '0.2rem',
  space_1: '0.25rem',
  space_2: '0.5rem',
  space_3: '0.75rem',
  space_4: '1rem',
  space_5: '1.25rem',
  space_6: '1.5rem',
  space_8: '2rem',
  space_10: '2.5rem',
  space_12: '3rem',
  space_16: '4rem',
  space_20: '5rem',
  space_24: '6rem',
  space_28: '7rem',
  space_32: '8rem',
}
