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

export type MarkdownProps = {
  children: string
}

export const Markdown = ({ children, ...props }: MarkdownProps & SpaceProps & LayoutProps) => {
  return (
    <StyledMarkdown {...props}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </StyledMarkdown>
  )
}

export const StyledMarkdown = styled(Box)<FlexboxProps & SpaceProps & BorderProps>`
  color: ${p => p.theme.colors.text.primary};
  font-size: ${p => p.theme.typography.font_size_200};
  line-height: ${p => p.theme.typography.font_line_height_4};
  font-weight: ${p => p.theme.typography.font_weight_regular};

  p a {
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.typography.font_weight_bold};
  }
  p a::after {
    content: '→';
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.typography.font_weight_bold};
    text-decoration: none !important;
  }
  p a:hover {
    color: ${p => p.theme.colors.text.primary};
    text-decoration: underline;
  }

  a:link, a:visited {
    color: ${p => p.theme.colors.text.primary};
    text-decoration: underline;
  }

  a:link:before {
    content: '🔗';
    margin: 0px 10px 0px 0px;
    text-decoration: none;
    display:inline-block;
  }

  ${flexbox}
  ${space}
  ${border}
`
