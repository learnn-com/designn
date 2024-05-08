import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";
import {Box} from "./Box";

export const HorizontalStack = styled(Box)<
  FlexboxProps & SpaceProps & ColorProps & BorderProps & ShadowProps
>`
  display: flex;
  flex-direction: row;

  ${color}
  ${flexbox}
  ${space}
  ${border}
  ${shadow}
`;
