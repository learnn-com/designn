import themed from '../theme/themed'
import { mutuallyExclusiveTrueKeys, undefinedAsFalse } from '../utils/props'

export type TitleProps = {
  level: 1 | 2 | 3
  children?: React.ReactNode
  inline?: boolean
  muted?: boolean
  primary?: boolean
  testid?: string
}

export function Title({ level, children, inline, muted, primary, testid }: TitleProps) {
  const element: 'h1' | 'h2' | 'h3' = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'
  return (
    <Component
      as={element}
      level={level}
      inline={undefinedAsFalse(inline)}
      muted={undefinedAsFalse(muted)}
      primary={undefinedAsFalse(primary)}
      data-testid={testid}>
      {children}
    </Component>
  )
}
const Component = themed.h1<{ level: 1 | 2 | 3; inline: boolean; primary: boolean; muted: boolean }>`
${(p) => p.theme.typography.textReset}
${(p) => {
  switch (p.level) {
    case 1:
      return p.theme.typography.title1
    case 2:
      return p.theme.typography.title2
    case 3:
      return p.theme.typography.title3
    default:
      return ''
  }
}}
${(p) => (p.inline ? 'display:inline' : '')}
${(p) => {
  const key = mutuallyExclusiveTrueKeys(p, 'muted', 'primary')
  if (key === 'muted') {
    return `color: ${p.theme.color.muted}`
  }
  if (key === 'primary') {
    return `color: ${p.theme.color.brand.primary[3]}`
  }
  return ''
}}
`
