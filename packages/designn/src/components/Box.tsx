import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  background,
  BackgroundProps,
} from 'styled-system'

export type BoxProps = {
  shadow?: number
  cursor?: string
  transition?: string
  gap?: string
  scrollable?: boolean
}

export const Box = styled.div<
  BoxProps &
    LayoutProps &
    ColorProps &
    PositionProps &
    SpaceProps &
    FlexProps &
    BorderProps &
    FlexboxProps &
    TypographyProps &
    BackgroundProps
>(
  ({ cursor, transition, gap, scrollable }) => ({
    cursor,
    transition,
    gap,
    ...(scrollable && {
      overflow: 'auto',
      whiteSpace: 'nowrap',
      'scrollbar-width': 'none'
    })
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography, background),
)
