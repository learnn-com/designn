export type ResponsiveBreakpoint = `@media only screen and (min-width: ${number}px)`

export type Responsive = {
  small: ResponsiveBreakpoint
  large: ResponsiveBreakpoint
  tablet: ResponsiveBreakpoint
}

export type ResponseSize = keyof Responsive

export function createResponsive(): Responsive {
  return {
    small: createResponsiveBreakpoint(breakpoints.small),
    large: createResponsiveBreakpoint(breakpoints.large),
    tablet: createResponsiveBreakpoint(breakpoints.tablet)
  }
}

const breakpoints: { [k in ResponseSize]: number } = {
  small: 320,
  large: 414,
  tablet: 834
}

const createResponsiveBreakpoint: (breakpoint: number) => ResponsiveBreakpoint = (breakpoint: number) =>
  `@media only screen and (min-width: ${breakpoint}px)`
