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
import remarkGfm from 'remark-gfm'
import React from 'react'
import { useState } from 'react'

export type FormattedMarkdownSize = 'sm' | 'xs'
export type FormattedMarkdownColorVariants = 'primary' | 'secondary'

type MarkdownOverrides = {
  reactMarkdownProps?: ReactMarkdown.ReactMarkdownPropsBase
}

export type FormattedMarkdownProps = {
  /** Text to render */
  children: string | undefined | null
  /** Component size - 'sm' for smaller variant (1.1rem base), undefined for default (1.2rem base) */
  size?: FormattedMarkdownSize
  /** Markdown Overrides */
  overrides?: MarkdownOverrides
  /** If the regex matches one of the links, opens it in the same tab */
  opensInSameTabRegexes?: string[]
  /** Optionally parse links and modify the url */
  parseUrlsMethod?: (url: string) => string
  /** Maximum number of lines to show */
  maxLines?: number
  /** External className for custom CSS */
  className?: string
  /** Function to handle link clicks */
  onLinkClick?: (href: string) => void
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

const cleanMarkdownTables = (markdownText: string | undefined | null): string => {
  if (!markdownText) return '';
  return markdownText.replace(/\|\s*\|/g, '|\n|');
}

export const FormattedMarkdown = ({ children, size, overrides, opensInSameTabRegexes, parseUrlsMethod, maxLines, className, onLinkClick, ...props }: FormattedMarkdownProps & SpaceProps & LayoutProps) => {
  const codeBlockRenderer = React.useCallback(
    (codeProps: any) => {
      const { language, value } = codeProps
      const [copied, setCopied] = useState(false)

      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error('Failed to copy code:', err)
        }
      }

      return (
        <div className="code-block-container">
          <button 
            className="copy-button" 
            onClick={handleCopy}
            title={copied ? 'Copiato!' : 'Copia codice'}
          >
            {copied ? 'Copiato!' : 'Copia'}
          </button>
          <pre>
            <code className={language ? `language-${language}` : ''}>
              {value}
            </code>
          </pre>
        </div>
      )
    },
    []
  )

  const { renderers, ...reactMarkdownPropsRest } = overrides?.reactMarkdownProps || {}

  return (
    <FormattedStyledMarkdown {...props} size={size} maxLines={maxLines} className={className}>
      <ReactMarkdown
        plugins={[remarkGfm]}
        renderers={{
          code: codeBlockRenderer,
          
          link: (props: LinkProps) => {
            const url = props.node?.url || props.href || '';
            const parsedUrl = parseUrlsMethod?.(url);
            const href = parsedUrl || url;
          
            const openInSameTab = opensInSameTabRegexes?.some(regex => new RegExp(regex).test(url));
            const openInSameTabParsed = parsedUrl
              ? opensInSameTabRegexes?.some(regex => new RegExp(regex).test(parsedUrl))
              : false;
          
            return (
              <a
                href={href}
                onClick={e => {
                  if (
                    (openInSameTab || openInSameTabParsed) &&
                    onLinkClick &&
                    !e.defaultPrevented &&
                    e.button === 0 &&
                    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                  ) {
                    e.preventDefault();
                    onLinkClick?.(href);
                  }
                }}
                target={openInSameTab || openInSameTabParsed ? '' : '_blank'}
                rel={!(openInSameTab || openInSameTabParsed) ? 'noopener noreferrer' : undefined}
                style={{ cursor: 'pointer' }}
              >
                {props.children}
              </a>
            );
          },
          
          image: (props) => {
            return (
              <div className="image-container">
                <img 
                  src={props.src} 
                  alt={props.alt || ''} 
                  title={props.title || props.alt || ''}
                  loading="lazy"
                />
              </div>
            );
          },
          blockquote: (props) => {
            return (
              <div className="blockquote-box">
                {props.children}
              </div>
            );
          },
          table: (props) => {
            return (
              <div className="table-container">
                <table>{props.children}</table>
              </div>
            );
          },
          ...renderers,
        }} 
        {...reactMarkdownPropsRest}
      >
        {cleanMarkdownTables(children)}
      </ReactMarkdown>
    </FormattedStyledMarkdown>
  )
}

type FormattedStyledMarkdownProps = FlexboxProps & SpaceProps & BorderProps & {
  maxLines?: number;
  size?: FormattedMarkdownSize;
};

export const FormattedStyledMarkdown = styled(Box)<FormattedStyledMarkdownProps>`
  color: ${p => p.theme.colors.text.base};
  font-weight: 400;
  --webkit-font-smoothing: antialiased;

  strong {
    font-weight: 800;
  }

  a {
    border-bottom: 2px solid white;
    color: ${p => p.theme.colors.text.base};
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: black;
    background-color: white;
  }

  p {
    font-style: normal;
    text-transform: none;
    padding: 0px;
    margin-bottom: 0rem;
  }

  ul,
  ol {
    margin: 0 0 1.5rem 0;
    padding-inline-start: 1.5rem;
    display: block;
  }

  ul {
    list-style-type: disc;
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  ol ol {
    list-style-type: lower-alpha;
  }

  ol ol ol {
    list-style-type: lower-roman;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin: 0.4rem 0px;
    line-height: 1.5;
    margin-bottom: 0.8rem !important;
  }

  li li {
    margin: 0.2rem 0px;
    margin-bottom: 0.8rem !important;
  }

  li li li {
    margin: 0.1rem 0px;
    margin-bottom: 0.8rem !important;
  }

  ${p => {
    if (p.size === 'sm') {
      return `
        font-size: 1.125rem;
        line-height: 1.6em;
        letter-spacing: -0.3px;
        
        a {
          font-size: 1.1rem;
        }
        
        p {
          letter-spacing: -0.3px;
          margin-top: 1.1rem;
        }
        
        p a ul li {
          font-size: 1.125rem;
        }

        h1 {
          margin-bottom: 1.3rem !important;
          font-size: 2.5rem;
          letter-spacing:-2.4px;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 0.95em;
        }
        h2 {
          margin-top: 2.4rem !important;
          margin-bottom: 1.2rem !important;
          font-size: 2.0rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.05em;
          letter-spacing:-1.4px;
        }
        h3 {
          margin-top: 2.4rem;
          margin-bottom: 1rem;
          font-size: 1.6rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.05em;
          letter-spacing:-0.8px;
        }
        h4 {
          margin-top: ${p.theme.spacing.space_5};
          font-size: 1.125rem;
          font-weight: ${p.theme.typography.font_weight_black};
        }

        ul, ol {
          margin: 0 0 1.2rem 0;
          padding-inline-start: 1.2rem;
        }

        ul ul, ol ol, ul ol, ol ul {
          margin-top: 0.6rem;
          margin-bottom: 1.2rem;
        }

        li {
          margin: 0.3rem 0px;
          line-height: 1.5;
          margin-bottom: 0.6rem !important;
        }

        li li {
          margin: 0.15rem 0px;
          margin-bottom: 0.6rem !important;
        }

        li li li {
          margin: 0.08rem 0px;
          margin-bottom: 0.6rem !important;
        }

        hr {
          margin: 1.6rem 0;
        }

        .table-container {
          margin: 1.6rem auto 2rem;
          line-height: 1.1em;
        }

        .image-container {
          margin: 1.2rem 0;
          
          img {
            margin: 1.6rem auto 2rem;
          }
        }

        .blockquote-box {
          margin: 1.6rem auto 2rem;
          padding: 1.2rem;
          line-height: 1.5em;
        }

        .code-block-container {
          margin: 1.6rem auto 2rem;
        }
      `;
    } else if (p.size === 'xs') {
      return `
        font-size: 0.875rem;
        line-height: 1.4em;
        letter-spacing: -0.15px;
        
        a {
          font-size: 0.85rem;
        }
        
        p {
          letter-spacing: -0.15px;
          margin-top: 0.8rem;
        }
        
        p a ul li {
          font-size: 0.875rem;
        }

        h1 {
          margin-bottom: 1rem !important;
          font-size: 1.7rem;
          letter-spacing:-1.5px;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 0.95em;
        }
        h2 {
          margin-top: 1.6rem !important;
          margin-bottom: 0.8rem !important;
          font-size: 1.35rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.05em;
          letter-spacing:-0.9px;
        }
        h3 {
          margin-top: 1.6rem;
          margin-bottom: 0.7rem;
          font-size: 1.15rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.05em;
          letter-spacing:-0.55px;
        }
        h4 {
          margin-top: ${p.theme.spacing.space_5};
          font-size: 0.8125rem;
          font-weight: ${p.theme.typography.font_weight_black};
        }

        ul, ol {
          margin: 0 0 0.8rem 0;
          padding-inline-start: 0.875rem;
        }

        ul ul, ol ol, ul ol, ol ul {
          margin-top: 0.4rem;
          margin-bottom: 0.8rem;
        }

        li {
          margin: 0.2rem 0px;
          line-height: 1.4;
          margin-bottom: 0.4rem !important;
        }

        li li {
          margin: 0.1rem 0px;
          margin-bottom: 0.4rem !important;
        }

        li li li {
          margin: 0.05rem 0px;
          margin-bottom: 0.4rem !important;
        }

        hr {
          margin: 1.2rem 0;
        }

        .table-container {
          margin: 1.2rem auto 1.5rem;
          line-height: 1.1em;
        }

        .image-container {
          margin: 0.8rem 0;
          
          img {
            margin: 1.2rem auto 1.5rem;
          }
        }

        .blockquote-box {
          margin: 1.2rem auto 1.5rem;
          padding: 0.875rem;
          line-height: 1.4em;
        }

        .code-block-container {
          margin: 1.2rem auto 1.5rem;
        }
      `;
    } else {
      return `
        font-size: 1.2rem;
        line-height: 1.8em;
        letter-spacing: -0.4px;
        
        a {
          font-size: 1.2rem;
        }
        
        p {
          letter-spacing: -0.4px;
          margin-top: 1.3rem;
        }
        
        p a ul li {
          font-size: 1.2rem;
        }

        h1 {
          margin-bottom: 1.5rem !important;
          font-size: 3.2rem;
          letter-spacing:-3px;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1em;
        }
        h2 {
          margin-top: 3rem !important;
          margin-bottom: 1.5rem !important;
          font-size: 2.4rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.1em;
          letter-spacing:-1.8px;
        }
        h3 {
          margin-top: 3rem;
          margin-bottom: 1.3rem;
          font-size: 2rem;
          font-weight: ${p.theme.typography.font_weight_black};
          line-height: 1.1em;
          letter-spacing:-1px;
        }
        h4 {
          margin-top: ${p.theme.spacing.space_6};
          font-size: 1.2rem;
          font-weight: ${p.theme.typography.font_weight_black};
        }
      `;
    }
  }}

  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p {
    margin-top: 0rem;
  }

  hr {
    margin: 2rem 0;
    border: none;
    height: 1px;
    background-color: #858585;
  }

  ${p => p.maxLines && `
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${p.maxLines};
    -webkit-box-orient: vertical;
  `}
  
  .table-container {
    width: 100%;
    margin: 2rem auto 2.5rem;
    overflow-x: auto;
    line-height: 1.2em;
  }
  
  .image-container {
    margin: 1.5rem 0;
    text-align: center;
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: block;
      margin: 2rem auto 2.5rem;
    }
  }
  
  .blockquote-box {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 2rem auto 2.5rem;
    padding: 1.5rem;
    background-color: #262733;
    border-color: #8585853D;
    border-style: solid;
    line-height: 1.6em;

    border-width: 1px 1px 1px 1px;
    border-radius: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    p {
      margin-top: 0;
    }
    
    p:last-child {
      margin-bottom: 0;
    }
  }
  
  table {
    border-spacing: 0 !important;
    border-collapse: separate !important;
    border-color: #858585 !important;
    border-style: solid !important;
    border-width: 1px !important;
    border-radius: 1rem !important;
    display: table !important;
    margin: 0 auto !important;
    width: auto !important;
    min-width: 100% !important;
    overflow: hidden !important;
  }
  
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr {
    padding: 0.6rem 0.8rem;
  }
  
  td, th {
    border-right: 1px solid #858585 !important;
    border-bottom: 1px solid #858585 !important;
  }
  
  td:last-child, th:last-child {
    border-right: none !important;
  }
  
  tr:last-child td {
    border-bottom: none !important;
  }
  
  th {
    font-weight: ${p => p.theme.typography.font_weight_black} !important;
    font-size: ${p => p.theme.typography.font_size_200} !important;
    text-align: left !important;
    background-color: #262733 !important;
    border-bottom: 1px solid #858585 !important;
    border-right: 1px solid #858585 !important;
  }
  
  thead:last-child th {
    border-bottom: 1px solid #8585853D !important;
  }

    .code-block-container {
    max-width: 100%;
    position: relative;
    margin: 2rem auto 2.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid #333;
  }

  .copy-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(42, 42, 42, 0.9);
    border: 1px solid #555;
    color: #ccc;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-family: 'Messina Sans', sans-serif;
    transition: all 0.2s ease;
    z-index: 1;
    backdrop-filter: blur(4px);
    opacity: 0;
    visibility: hidden;
  }

  .code-block-container:hover .copy-button {
    opacity: 1;
    visibility: visible;
  }

  .copy-button:hover {
    background-color: rgba(51, 51, 51, 0.95);
    border-color: #777;
    color: #fff;
  }

  .copy-button:active {
    transform: scale(0.95);
  }

  .code-block-container pre {
    margin: 0;
    padding: 1rem;
    background: transparent;
    overflow-x: auto;
  }

  .code-block-container code {
    background: transparent;
    padding: 0;
    border-radius: 0;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #e6e6e6;
  }

  ${flexbox}
  ${space}
  ${border}
`

