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

type BoxProps = {
  shadow?: number
  cursor?: string
  transition?: string
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
  ({ cursor, transition }) => ({
    cursor,
    transition,
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography, background),
)
