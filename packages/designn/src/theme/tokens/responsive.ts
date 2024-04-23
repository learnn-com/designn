export type ResponsiveBreakpoint =
  | `@media only screen and (max-width: ${number}px)`
  | `@media only screen and (min-width: ${number}px)`

export type ResponsiveDirections = 'up' | 'down'

export type ResponsiveKeys =
  | `small_${ResponsiveDirections}`
  | `medium_${ResponsiveDirections}`
  | `large_${ResponsiveDirections}`
  | `xlarge_${ResponsiveDirections}`

export type BreakpointsKeys = 
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'

export type Responsive = {
  [Key in ResponsiveKeys]: ResponsiveBreakpoint
}

export type Breakpoints = {
  [Key in BreakpointsKeys]: number 
}

const createResponsiveBreakpoint: (
  breakpoint: number,
  limit: 'min' | 'max',
) => ResponsiveBreakpoint = (breakpoint: number, limit: 'min' | 'max') =>
  `@media only screen and (${limit}-width: ${breakpoint}px)`

export const breakpoints: Breakpoints = {
  small: 576,
  medium: 768,
  large: 1024,
  xlarge: 1440,
}

export const responsive: Responsive = {
  small_up: createResponsiveBreakpoint(breakpoints.small, 'min'),
  small_down: createResponsiveBreakpoint(breakpoints.small, 'max'),
  medium_up: createResponsiveBreakpoint(breakpoints.medium, 'min'),
  medium_down: createResponsiveBreakpoint(breakpoints.medium, 'max'),
  large_up: createResponsiveBreakpoint(breakpoints.large, 'min'),
  large_down: createResponsiveBreakpoint(breakpoints.large, 'max'),
  xlarge_up: createResponsiveBreakpoint(breakpoints.xlarge, 'min'),
  xlarge_down: createResponsiveBreakpoint(breakpoints.xlarge, 'max'),
}
