export type ResponsiveBreakpoint =
  | `@media only screen and (max-width: ${number}px)`
  | `@media only screen and (min-width: ${number}px)`

export type Responsive = {
  small_up: ResponsiveBreakpoint
  small_down: ResponsiveBreakpoint
  medium_up: ResponsiveBreakpoint
  medium_down: ResponsiveBreakpoint
  large_up: ResponsiveBreakpoint
  large_down: ResponsiveBreakpoint
  xlarge_up: ResponsiveBreakpoint
  xlarge_down: ResponsiveBreakpoint
}

export type Breakpoints = {
  small: number
  medium: number
  large: number
  xlarge: number
}

const createResponsiveBreakpoint: (
  breakpoint: number,
  limit: 'min' | 'max',
) => ResponsiveBreakpoint = (breakpoint: number, limit: 'min' | 'max') =>
  `@media only screen and (${limit}-width: ${breakpoint}px)`

const breakpoints: Breakpoints = {
  small: 576,
  medium: 768,
  large: 1024,
  xlarge: 1440,
}

export const responsive: Responsive = {
  small_up: createResponsiveBreakpoint(breakpoints.small, 'min'),
  small_down: createResponsiveBreakpoint(breakpoints.small, 'max'),
  medium_up: createResponsiveBreakpoint(breakpoints.small, 'min'),
  medium_down: createResponsiveBreakpoint(breakpoints.small, 'max'),
  large_up: createResponsiveBreakpoint(breakpoints.small, 'min'),
  large_down: createResponsiveBreakpoint(breakpoints.small, 'max'),
  xlarge_up: createResponsiveBreakpoint(breakpoints.small, 'min'),
  xlarge_down: createResponsiveBreakpoint(breakpoints.small, 'max'),
}
