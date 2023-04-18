import { breakpoints, BreakpointsKeys } from "./responsive" 


export type BreakpointsScale = {
    [Key in BreakpointsKeys]: string 
  }
  

export const breakpointsScale: BreakpointsScale = {
    small: breakpoints.small+'px',
    medium: breakpoints.medium+'px',
    large: breakpoints.large+'px',
    xlarge: breakpoints.xlarge+'px',
}