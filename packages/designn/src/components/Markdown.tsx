import {
  LayoutProps,
  SpaceProps,
  BorderProps,
  FlexboxProps,
  flexbox,
  space,
  border,
} from 'styled-system'
import styled from 'styled-components'
import { Box } from './Box'
import ReactMarkdown from 'react-markdown'

type Size = 'md' | 'lg'

type MarkdownOverrides = {
  reactMarkdownProps?: ReactMarkdown.ReactMarkdownPropsBase
}

export type MarkdownProps = {
  /** Text to render */
  children: string
  /** Component size */
  size?: Size
  /** Markdown Overrides */
  overrides?: MarkdownOverrides
}

export const Markdown = ({ children, overrides, ...props }: MarkdownProps & SpaceProps & LayoutProps) => {
  return (
    <StyledMarkdown {...props}>
      <ReactMarkdown
        renderers={{
          link: props => (
            <a href={props.node.url} target='_blank'>
              {props.children}
            </a>
          ),
        }}
        {...overrides?.reactMarkdownProps}
      >
        {children}
      </ReactMarkdown>
    </StyledMarkdown>
  )
}

export const StyledMarkdown = styled(Box)<FlexboxProps & SpaceProps & BorderProps>`
  color: ${p => p.theme.colors.text.base};
  font-weight: ${p => p.theme.typography.font_weight_regular};
  ${p => {
    if (p.size === 'lg') {
      return `font-size: ${p.theme.typography.font_size_300};
              line-height: ${p.theme.typography.font_line_height_4};
              h1 {
                font-size: ${p.theme.typography.font_size_600};
                line-height: ${p.theme.typography.font_line_height_6};
                letter-spacing:-0.05em;
              }
              h2 {
                margin-top: ${p.theme.spacing.space_8};
                font-size:  ${p.theme.typography.font_size_500};
                font-weight: ${p.theme.typography.font_weight_black};
                letter-spacing:-0.04em;
              }
              h3 {
                margin-top: ${p.theme.spacing.space_8};
                font-size: ${p.theme.typography.font_size_200};
                font-weight: ${p.theme.typography.font_weight_black};
                line-height: ${p.theme.typography.font_line_height_2};
                letter-spacing:-0.04em;
              }
              h4 {
                margin-top: ${p.theme.spacing.space_8};
                font-weight: ${p.theme.typography.font_weight_bold};
                font-weight: ${p.theme.typography.font_weight_black};
                letter-spacing:-0.04em;
              }
              `
    } else {
      return `font-size: ${p.theme.typography.font_size_200};
      line-height: ${p.theme.typography.font_line_height_4};
      h1 {
            margin-top: ${p.theme.spacing.space_6};
            font-size:  ${p.theme.typography.font_size_500};
            letter-spacing:-0.04em;
            font-weight: ${p.theme.typography.font_weight_black};
            line-height: ${p.theme.typography.font_line_height_5};
          }
      h2 {
        margin-top: ${p.theme.spacing.space_6};
        font-size:  ${p.theme.typography.font_size_400};
        font-weight: ${p.theme.typography.font_weight_black};
        line-height: ${p.theme.typography.font_line_height_4};
        letter-spacing:-0.04em;
      }
      h3 {
            margin-top: ${p.theme.spacing.space_6};
            font-size: ${p.theme.typography.font_size_200};
            font-weight: ${p.theme.typography.font_weight_black};
            line-height: ${p.theme.typography.font_line_height_2};
            letter-spacing:-0.04em;
          }
      h4 {
        margin-top: ${p.theme.spacing.space_6};
        font-weight: ${p.theme.typography.font_weight_black};
      }`
    }
  }}
  p a, ul li a {
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.typography.font_weight_bold};
    text-decoration: underline;
  }

  a:link,
  a:visited {
    color: ${p => p.theme.colors.text.primary};
    text-decoration: underline;
  }
  strong,
  b {
    font-weight: ${p => p.theme.typography.font_weight_bold};
  }

  pre {
    display: block;
    font-size: 72.5%;
    color: ${p => p.theme.colors.card_background};
    background: ${p => p.theme.colors.text.primary_inverted};
    padding: ${p => p.theme.spacing.space_6};
    border-radius: ${p => p.theme.borders.radius.large};
    margin-top: ${p => p.theme.spacing.space_4};
  }

  code {
    color: ${p => p.theme.colors.code};
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${flexbox}
  ${space}
  ${border}
`
