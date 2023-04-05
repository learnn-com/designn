import { css } from 'styled-components'
import themed from '../theme/themed'
import { mutuallyExclusiveTrueKeys, undefinedAsFalse } from '../utils/props'

export type TextProps = {
  children: string
  micro?: boolean
  small?: boolean
  large?: boolean
  inline?: boolean
  muted?: boolean
  disabled?: boolean
  align?: Align
  bold?: boolean
  noWrap?: boolean
  truncated?: boolean
  uppercased?: boolean
  preserveWhitespace?: boolean
  testid?: string
}

type Element = 'div' | 'span' | 'small' | 'h4'
type Align = 'parent' | 'start' | 'center' | 'end'

export function Text({
  inline,
  micro,
  small,
  large,
  muted,
  disabled,
  align,
  bold,
  noWrap,
  truncated,
  uppercased,
  preserveWhitespace,
  children,
  testid
}: TextProps) {
  const element: Element = getElement({ inline, large })
  const alignment = align ?? 'parent'
  return (
    <Component
      as={element}
      data-testid={testid}
      inline={undefinedAsFalse(inline)}
      micro={undefinedAsFalse(micro)}
      small={undefinedAsFalse(small)}
      large={undefinedAsFalse(large)}
      muted={undefinedAsFalse(muted)}
      alignment={alignment}
      bold={undefinedAsFalse(bold)}
      noWrap={undefinedAsFalse(noWrap)}
      truncated={undefinedAsFalse(truncated)}
      uppercased={undefinedAsFalse(uppercased)}
      preserveWhitespace={undefinedAsFalse(preserveWhitespace)}
      disabled={undefinedAsFalse(disabled)}>
      {children}
    </Component>
  )
}
const Component = themed.div<{
  micro: boolean
  small: boolean
  large: boolean
  muted: boolean
  disabled: boolean
  inline: boolean
  alignment: Align
  bold: boolean
  noWrap: boolean
  uppercased: boolean
  truncated: boolean
  preserveWhitespace: boolean
}>`
${(p) => p.theme.typography.textReset}
${(p) => {
  const key = mutuallyExclusiveTrueKeys(p, 'micro', 'small', 'large')
  if (key === 'micro') {
    return p.theme.typography.textMicro
  }
  if (key === 'small') {
    return p.theme.typography.textSmall
  }
  if (key === 'large') {
    return p.theme.typography.textLarge
  }
  return p.theme.typography.textRegular
}}

${(p) => {
  const key = mutuallyExclusiveTrueKeys(p, 'muted', 'disabled')
  if (key === 'muted') {
    return `color: ${p.theme.color.brand.primary[3]}`
  }
  if (key === 'disabled') {
    return p.theme.pattern.disabled
  }
  return ''
}}

${(p) => (p.inline ? 'display: inline;' : '')}
${(p) => (p.bold ? 'font-weight: 700;' : '')}
${(p) => (p.uppercased ? 'text-transform: uppercase;' : '')}
${(p) => (p.preserveWhitespace ? 'white-space: pre-wrap;' : '')}
${(p) => {
  const key = mutuallyExclusiveTrueKeys(p, 'noWrap', 'truncated')
  if (key === 'noWrap') {
    return noWrapStyle
  }
  if (key === 'truncated') {
    return truncatedStyle
  }
  return ''
}}
${(p) => {
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
 `

const noWrapStyle = css`
  white-space: nowrap;
`
const truncatedStyle = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const getElement: (p: Omit<TextProps, 'children'>) => Element = ({ inline, large }) => {
  if (inline) {
    return 'span'
  }
  if (large) {
    return 'h4'
  }
  return 'div'
}
