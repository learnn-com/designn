export type Borders = {
  radius: {
    base: SpaceUnit
    medium: SpaceUnit
    large: SpaceUnit
    half: SpaceUnit
    full: SpaceUnit
  }
  width: {
    base: SpaceUnit
    medium: SpaceUnit
    large: SpaceUnit
  }
}

export type SpaceUnit = `${number}rem` | `${number}%`

export const borders: Borders = {
  radius: {
    base: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    half: '50%',
    full: '1000rem',
  },
  width: {
    base: '0.0625rem',
    medium: '0.125rem',
    large: '0.25rem',
  },
}
