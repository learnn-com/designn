import { ReactNode, HTMLAttributes } from 'react'
import { undefinedAsFalse } from '../utils/props'
import styled, { css } from 'styled-components'
import { SpaceProps, space } from 'styled-system'
import { FontLineHeightScale } from 'theme/tokens/typography'

type Variant =
  | 'heading2xs'
  | 'headingXs'
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'headingXl'
  | 'heading2xl'
  | 'heading3xl'

type Element = 'h1' | 'h2' | 'h3' | 'h4'

type Alignment = 'start' | 'center' | 'end'

type FontWeight = 'regular' | 'semibold' | 'bold' | 'black'

type Color = 'primary' | 'dimmed' | 'error' | 'success'

export type TitleProps = {
  /** Adjust horizontal alignment of text */
  alignment?: Alignment
  /** Text to display */
  children: ReactNode
  /** Adjust color of text */
  color?: Color
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
  variant: Variant
  /** Id used for tests */
  testid?: string
  /** HTML class attribute */
  className?: string
}

export function Title({
  alignment,
  children,
  className,
  color,
  fontWeight,
  id,
  truncate,
  variant,
  testid,
  ...props
}: TitleProps & SpaceProps & HTMLAttributes<HTMLElement>) {
  const element: Element = getElement({ variant })

  return (
    <Component
      id={id}
      as={element}
      variant={variant}
      alignment={alignment ?? 'start'}
      truncate={undefinedAsFalse(truncate)}
      color={color ?? 'primary'}
      fontWeight={fontWeight}
      data-testid={testid}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

const Component = styled.h1<TitleProps & SpaceProps>`
  margin: 0;
  padding: 0;
  ${space}
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
    if (p.variant === 'heading2xs') {
      return `font-size: ${p.theme.typography.font_size_100};
              line-height: ${p.theme.typography.font_line_height_1};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'headingXs') {
      return `font-size: ${p.theme.typography.font_size_200};
              line-height: ${p.theme.typography.font_line_height_2};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'headingSm') {
      return `font-size: ${p.theme.typography.font_size_300};
              line-height: ${p.theme.typography.font_line_height_3};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'headingMd') {
      return `font-size: ${p.theme.typography.font_size_400};
              line-height: ${p.theme.typography.font_line_height_4};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'headingLg') {
      return `font-size: ${p.theme.typography.font_size_500};
              line-height: ${p.theme.typography.font_line_height_5};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'headingXl') {
      return `font-size: ${p.theme.typography.font_size_600};
              line-height: ${p.theme.typography.font_line_height_6};
              letter-spacing:-0.04em;`
    }
    if (p.variant === 'heading2xl') {
      return `font-size: ${p.theme.typography.font_size_700};
              line-height: ${p.theme.typography.font_line_height_7};
              letter-spacing:-0.05em;`
    }
    if (p.variant === 'heading3xl') {
      return `font-size: ${p.theme.typography.font_size_800};
              line-height: ${p.theme.typography.font_line_height_8};
              letter-spacing:-0.05em;`
    }
    return ''
  }}

  ${p => p.theme.responsive.medium_down} {
    ${p => {
      if (p.variant === 'heading2xs') {
        return `font-size: ${p.theme.typography.font_size_75};
                line-height: ${p.theme.typography.font_line_height_1};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingXs') {
        return `font-size: ${p.theme.typography.font_size_100};
                line-height: ${p.theme.typography.font_line_height_1};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingSm') {
        return `font-size: ${p.theme.typography.font_size_200};
                line-height: ${p.theme.typography.font_line_height_2};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingMd') {
        return `font-size: ${p.theme.typography.font_size_300};
                line-height: ${p.theme.typography.font_line_height_3};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingLg') {
        return `font-size: ${p.theme.typography.font_size_400};
                line-height: ${p.theme.typography.font_line_height_4};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingXl') {
        return `font-size: ${p.theme.typography.font_size_500};
                line-height: ${p.theme.typography.font_line_height_5};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'heading2xl') {
        return `font-size: ${p.theme.typography.font_size_600};
                line-height: ${p.theme.typography.font_line_height_6};
                letter-spacing:-0.05em;`
      }
      if (p.variant === 'heading3xl') {
        return `font-size: ${p.theme.typography.font_size_700};
                line-height: ${p.theme.typography.font_line_height_7};
                letter-spacing:-0.05em;`
      }
      return ''
    }}
  }

  ${p => p.theme.responsive.small_down} {
    ${p => {
      if (p.variant === 'headingXl') {
        return `font-size: ${p.theme.typography.font_size_300};
                line-height: ${p.theme.typography.font_line_height_3};
                letter-spacing:-0.04em;`
      }
      if (p.variant === 'headingXs') {
        return `font-size: ${p.theme.typography.font_size_200};
                line-height: ${p.theme.typography.font_line_height_2};`
      }
      return ''
    }}
  }

  ${p =>
    p.fontWeight
      ? `font-weight:${p.theme.typography[`font_weight_${p.fontWeight}`]};`
      : `font-weight:${p.theme.typography.font_weight_black};`}
  ${p =>
    p.color
      ? `color:${p.theme.colors.text[`${p.color}`]};`
      : `color:${p.theme.colors.text.primary};`}

  ${p =>
    p.lineHeightScale &&
    `line-height: ${p.theme.typography[`font_line_height_${p.lineHeightScale}`]};`}
`

const truncatedStyle = css<TitleProps>`
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

const getElement: (p: Omit<TitleProps, 'children'>) => Element = ({ variant }) => {
  switch (variant) {
    case 'headingXs':
      return 'h4'
    case 'headingSm':
      return 'h3'
    case 'headingMd':
      return 'h2'
    case 'headingLg':
      return 'h1'
    case 'headingXl':
      return 'h1'
    case 'heading2xl':
      return 'h1'
    default:
      return 'h1'
  }
}
