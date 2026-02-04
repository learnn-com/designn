import { HTMLAttributes, ReactNode } from 'react'
import { undefinedAsFalse } from '../utils/props'
import { ColorTextAlias } from '../theme/tokens/colors'
import { Color } from '../utils/colors'
import styled, { css, DefaultTheme } from 'styled-components'
import { HeightProps, SpaceProps, WidthProps, compose, height, space, width } from 'styled-system'
import { FontLineHeightScale } from '../theme/tokens/typography'

type Variant = 'bodyXxxs' | 'bodyXxs' | 'bodyXs' | 'bodySm' | 'bodyMd' | 'bodyLg'

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Alignment = 'start' | 'center' | 'end'

type ColorVariants = ColorTextAlias

type FontWeight = 'light' | 'regular' | 'semibold' | 'bold' | 'black'

export type TextProps = {
  /** The element type */
  as?: Element
  /** Adjust horizontal alignment of text */
  alignment?: Alignment
  /** Text to display */
  children: ReactNode
  /** Adjust color of text */
  color?: ColorVariants
  /** Adjust color of text */
  textColor?: Color
  /** Adjust weight of text */
  fontWeight?: FontWeight
  /** Adjust height of text */
  lineHeightScale?: FontLineHeightScale
  /** HTML id attribute */
  id?: string
  /** Truncate text overflow with ellipsis */
  truncate?: boolean
  /** Truncate lines */
  truncateLines?: number
  /** Typographic style of text */
  variant?: Variant
  /** Weather or not element should be inline */
  inline?: boolean
  /** Id used for tests */
  testid?: string
  /** HTML class attribute */
  className?: string
}

export function Text({
  alignment,
  children,
  color,
  textColor,
  fontWeight,
  id,
  truncate,
  truncateLines,
  variant,
  inline,
  as,
  testid,
  className,
  ...props
}: TextProps & WidthProps & HeightProps & SpaceProps & HTMLAttributes<HTMLElement>) {
  const element: Element = as || (inline ? 'span' : 'p')

  return (
    <Component
      id={id}
      as={element}
      variant={variant}
      alignment={alignment ?? 'start'}
      truncate={undefinedAsFalse(truncate)}
      truncateLines={truncateLines}
      fontWeight={fontWeight}
      color={color ?? 'primary'}
      textColor={textColor}
      data-testid={testid}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

const textColorSf = (p: { theme: DefaultTheme } & TextProps) => {
  if (p.textColor) return `color: ${p.textColor}`
  return p.color
    ? `color:${p.theme.colors.text[`${p.color}`]};`
    : `color:${p.theme.colors.text.primary};`
}
const Component = styled.p<TextProps & SpaceProps & WidthProps & HeightProps>`
  margin: 0;
  padding: 0;

  ${p => {
    if (p.alignment === 'start') {
      return `text-align: left;`
    }
    if (p.alignment === 'center') {
      return `text-align: center;`
    }
    if (p.alignment === 'end') {
      return `text-align: right;`
    }
    return ''
  }}
  ${p => (p.truncate ? truncatedStyle : '')}
  ${p => {
    if (p.variant === 'bodyXxs') {
      return `font-size: ${p.theme.typography.font_size_75};
              line-height: ${p.theme.typography.font_line_height_1};`
    }
    if (p.variant === 'bodyXxxs') {
      return `font-size: 0.8rem;
              line-height: ${p.theme.typography.font_line_height_1};`
    }
    if (p.variant === 'bodyXs') {
      return `font-size: ${p.theme.typography.font_size_100};
              line-height: ${p.theme.typography.font_line_height_1};`
    }
    if (p.variant === 'bodySm') {
      return `font-size: ${p.theme.typography.font_size_200};
              line-height: ${p.theme.typography.font_line_height_2};`
    }
    if (p.variant === 'bodyMd') {
      return `font-size: ${p.theme.typography.font_size_300};
              line-height: ${p.theme.typography.font_line_height_3};`
    }
    if (p.variant === 'bodyLg') {
      return `font-size: ${p.theme.typography.font_size_400};
              line-height: ${p.theme.typography.font_line_height_4};`
    }
    return `font-size: ${p.theme.typography.font_size_base};
            line-height: ${p.theme.typography.font_line_height_2};`
  }}
  ${p => (p.fontWeight ? `font-weight:${p.theme.typography[`font_weight_${p.fontWeight}`]};` : '')}
  ${textColorSf}
  ${p =>
    p.lineHeightScale &&
    `line-height: ${p.theme.typography[`font_line_height_${p.lineHeightScale}`]};`}
 
  ${compose(space, width, height)}
`

const truncatedStyle = css<TextProps>`
  ${p =>
    p.truncateLines
      ? `
  -webkit-line-clamp: ${p.truncateLines};
  -webkit-box-orient: vertical;
 `
      : `
 white-space: nowrap;
 `}

  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
`
