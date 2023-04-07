export type Spacing = {
  space_0: SpaceUnit
  space_025: SpaceUnit
  space_05: SpaceUnit
  space_1: SpaceUnit
  space_2: SpaceUnit
  space_3: SpaceUnit
  space_4: SpaceUnit
  space_5: SpaceUnit
  space_6: SpaceUnit
  space_8: SpaceUnit
  space_10: SpaceUnit
  space_12: SpaceUnit
  space_16: SpaceUnit
  space_20: SpaceUnit
  space_24: SpaceUnit
  space_28: SpaceUnit
  space_32: SpaceUnit
}

type SpaceUnit = `${number}rem`

export const spacing: Spacing = {
  space_0: '0rem',
  space_025: '0.0625rem',
  space_05: '0.125rem',
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
