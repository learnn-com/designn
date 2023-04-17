import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from "styled-system";
import {Box} from "./Box";

export const HorizontalStack = styled(Box)<
  FlexboxProps & SpaceProps & ColorProps & BorderProps
>`
  display: flex;
  flex-direction: row;

  ${color}
  ${flexbox}
  ${space}
  ${border}
`;
