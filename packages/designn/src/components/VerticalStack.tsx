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

export const VerticalStack = styled(Box)<
  FlexboxProps & SpaceProps & ColorProps & BorderProps
>`
  display: flex;
  flex-direction: column;

  ${color}
  ${flexbox}
  ${space}
  ${border}
`;
