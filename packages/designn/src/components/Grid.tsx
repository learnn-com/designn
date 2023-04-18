import styled from "styled-components";
import {
  GridProps,
  grid
} from "styled-system";
import {Box} from "./Box";

export const Grid = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;
