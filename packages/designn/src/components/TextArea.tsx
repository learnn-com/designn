import React from 'react'
import styled, { useTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps, BorderProps } from 'styled-system'
import { VerticalStack } from './VerticalStack'
import { Text } from './Text'

const InputWrapper = styled.textarea<SpaceProps & LayoutProps & BorderProps>`
  padding: ${p => p.theme.spacing.space_3};
  font-size: ${p => p.theme.typography.font_size_base};
  border-radius: ${p => p.theme.borders.radius.large};
  border: 0;
  background-color: ${p => p.theme.colors.edge};
  color: ${p => p.theme.colors.text.base};

  :focus {
    outline: 0;
  }

  ${compose(space, layout, border)}
`

export type TextAreaProps = Omit<React.AreaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  label?: string
  error?: string
  rows?: number
}
export const TextArea = ({
  onChange,
  value,
  label,
  error,
  ...props
}: TextAreaProps & SpaceProps & LayoutProps) => {
  const { spacing, colors } = useTheme()
  return (
    <VerticalStack width={'100%'}>
      {label && (<Text variant='bodyXs' fontWeight='light'>{label}</Text>)}
      <InputWrapper {...props} onChange={onChange} value={value} my={spacing.space_2} />
      {error && (<Text variant='bodyXs' textColor={colors.text.error}>{error}</Text>)}
    </VerticalStack>
  )
}
