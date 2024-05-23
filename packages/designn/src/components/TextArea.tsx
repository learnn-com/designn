import React from 'react'
import styled, { useTheme, DefaultTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps, BorderProps } from 'styled-system'
import { VerticalStack } from './VerticalStack'
import { Text } from './Text'
import { Box } from './Box'

const styleContainerVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: Variant }) => {
  switch (variant) {
    case 'transparent':
      return `
        background-color: transparent;
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'dark':
      return `
        background-color: ${theme.colors.interaction_background.secondary_active};
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'light':
      return `
        background-color: ${theme.colors.interaction_background.primary_active};
        color:${theme.colors.text.primary_inverted};
        border: none;
      `
    default:
      return `
        background-color: ${theme.colors.edge};
        border: none;
      `
  }
}

const InputWrapper = styled.textarea<
  { variant?: Variant } & SpaceProps & LayoutProps & BorderProps
>`
  padding: ${p => p.theme.spacing.space_3};
  font-size: ${p => p.theme.typography.font_size_base};
  border-radius: ${p => p.theme.borders.radius.large};
  border: 0;
  color: ${p => p.theme.colors.text.base};

  :focus {
    outline: 0;
  }

  ${styleContainerVariant}
  ${compose(space, layout, border)}
`

type Variant = 'transparent' | 'dark' | 'light'

export type TextAreaProps = Omit<React.AreaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  label?: string
  error?: string
  rows?: number
  variant?: Variant
}
export const TextArea = ({
  onChange,
  value,
  label,
  error,
  variant,
  ...props
}: TextAreaProps & SpaceProps & LayoutProps) => {
  const { spacing, colors } = useTheme()
  return (
    <VerticalStack width={'100%'}>
      {label && (
        <Box mb={spacing.space_2}>
          <Text variant='bodyXs'>{label}</Text>
        </Box>
      )}
      <InputWrapper
        variant={variant}
        {...props}
        onChange={onChange}
        value={value}
        my={spacing.space_2}
      />
      {error && (
        <Text variant='bodyXs' textColor={colors.text.error}>
          {error}
        </Text>
      )}
    </VerticalStack>
  )
}
