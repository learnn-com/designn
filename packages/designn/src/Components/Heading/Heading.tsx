import {ReactNode} from 'react';
import styled from 'styled-components'

type Variant =
  | 'headingXs'
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'headingXl'
  | 'heading2xl'
  | 'heading3xl'
  | 'heading4xl'

type Alignment = 'start' | 'center' | 'end' | 'justify';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type Color = 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';

export type HeadingProps = {
  /** Adjust horizontal alignment of text */
  alignment?: Alignment;
  /** Prevent text from overflowing */
  breakWord?: boolean;
  /** Text to display */
  children: ReactNode;
  /** Adjust color of text */
  color?: Color;
  /** Adjust weight of text */
  fontWeight?: FontWeight;
  /** HTML id attribute */
  id?: string;
  /** Use a numeric font variant with monospace appearance */
  numeric?: boolean;
  /** Truncate text overflow with ellipsis */
  truncate?: boolean;
  /** Typographic style of text */
  variant?: Variant;
}

export const Heading = styled.h1<HeadingProps>`
  font-size: ${(p) => p.theme.typography.font_size_75};
`