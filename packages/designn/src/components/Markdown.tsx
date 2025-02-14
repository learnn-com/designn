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

export type Size = 'sm' | 'md' | 'lg'
export type ColorVariants = 'primary' | 'secondary'

type MarkdownOverrides = {
  reactMarkdownProps?: ReactMarkdown.ReactMarkdownPropsBase
}

export type MarkdownProps = {
  /** Text to render */
  children: string
  /** Component size */
  size?: Size
  /** Component size */
  color?: ColorVariants
  /** Markdown Overrides */
  overrides?: MarkdownOverrides
  /** If the regex matches one of the links, opens it in the same tab */
  opensInSameTabRegexes?: string[]
  /** Optionally parse links and modify the url */
  parseUrlsMethod?: (url: string) => string
}

type LinkProps = {
  children: React.ReactNode[];
  href: string;                 
  node: {
    type: string;
    title: string | null;
    url: string;
    children: React.ReactNode[]; 
    position?: object;  
  };                   
}

export const Markdown = ({ children, overrides, opensInSameTabRegexes, parseUrlsMethod, ...props }: MarkdownProps & SpaceProps & LayoutProps) => {
  return (
    <StyledMarkdown {...props}>
      <ReactMarkdown
        renderers={{
          link: (props: LinkProps) => {
            const url = props.node.url
            const openInSameTab = opensInSameTabRegexes?.some(regex => new RegExp(regex).test(url))
            const parsedUrl = parseUrlsMethod?.(url) 
            const openInSameTabParsed = parsedUrl ? opensInSameTabRegexes?.some(regex => new RegExp(regex).test(parsedUrl)) : undefined
            
            const href = parsedUrl || url;
            const target = openInSameTab || openInSameTabParsed ? '' : '_blank';

            return (
              <a href={href} target={target}>
                {props.children}
              </a>
            );
          },
        }} 
        {...overrides?.reactMarkdownProps}
      >
        {children}
      </ReactMarkdown>
    </StyledMarkdown>
  )
}

export const StyledMarkdown = styled(Box)<FlexboxProps & SpaceProps & BorderProps>`
  color: ${p => p.theme.colors.text[p.color === 'secondary' ? 'secondary' : 'base']};
  font-weight: ${p => p.theme.typography.font_weight_regular};
  ${p => {
    if (p.size === 'lg') {
      return `font-size: ${p.theme.typography.font_size_350};
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

              ul, ol {
                margin: 0;
                padding: 0;
                margin-left: ${p.theme.spacing.space_5};
                padding-left: ${p.theme.spacing.space_5};
              }

              li {
                margin: 0;
                padding-left: 0;
              }

              p {
                margin-top: ${p.theme.spacing.space_4};
                margin-bottom: 0;
              }
              p a, ul li a {
                color: ${p.theme.colors.text.primary};
                font-weight: ${p.theme.typography.font_weight_bold};
                text-decoration: underline;
                font-size: ${p.theme.typography.font_size_250};
              }

              a:link,
                a:visited {
                color: ${p.theme.colors.text.primary};
                text-decoration: underline;
              } 
              `
    } 
    else if (p.size === 'md') {
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
        font-size:  ${p.theme.typography.font_size_450};
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
      }
      p a, ul li a {
        color: ${p.theme.colors.text.primary};
        font-weight: ${p.theme.typography.font_weight_bold};
        text-decoration: underline;
        font-size: ${p.theme.typography.font_size_base};
      }
      
      ul, ol {
        margin: 0;
        padding: 0;
        margin-left: ${p.theme.spacing.space_2};
        padding-left: ${p.theme.spacing.space_5};
      }

      a:link,
        a:visited {
        color: ${p.theme.colors.text.primary};
        text-decoration: underline;
      }    
      `
    }
    else {
      return `font-size: ${p.theme.typography.font_size_base};
      line-height: ${p.theme.typography.font_line_height_4};
      h1 {
            margin-top: ${p.theme.spacing.space_4};
            font-size:  ${p.theme.typography.font_size_450};
            letter-spacing:-0.04em;
            font-weight: ${p.theme.typography.font_weight_black};
            line-height: ${p.theme.typography.font_line_height_5};
          }
      h2 {
        margin-top: ${p.theme.spacing.space_4};
        font-size:  ${p.theme.typography.font_size_350};
        font-weight: ${p.theme.typography.font_weight_black};
        line-height: ${p.theme.typography.font_line_height_4};
        letter-spacing:-0.04em;
      }
      h3 {
            margin-top: ${p.theme.spacing.space_4};
            font-size: ${p.theme.typography.font_size_200};
            font-weight: ${p.theme.typography.font_weight_black};
            line-height: ${p.theme.typography.font_line_height_2};
            letter-spacing:-0.04em;
          }
      h4 {
        margin-top: ${p.theme.spacing.space_4};
        font-weight: ${p.theme.typography.font_weight_black};
      }
      p a, ul li a {
        color: ${p.theme.colors.text.primary};
        font-weight: ${p.theme.typography.font_weight_bold};
        text-decoration: underline;
        font-size: ${p.theme.typography.font_size_base};
      }
      
      ul, ol {
        margin: 0;
        padding: 0;
        margin-left: ${p.theme.spacing.space_2};
        padding-left: ${p.theme.spacing.space_5};
      }

      a:link,
        a:visited {
        color: ${p.theme.colors.text.primary};
        text-decoration: underline;
      }  
      `
    }
  }}

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

  li {
    padding: 0;
    margin: 0;
  }

  p {
    margin-top: ${p => p.theme.spacing.space_4};
    margin-bottom: 0;
  }

  ${flexbox}
  ${space}
  ${border}
`
