import React from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps, BorderProps } from 'styled-system'
import { Color } from 'utils/colors'
import { VerticalStack } from './VerticalStack'
import { Text } from './Text'
import { Box } from './Box'

const styleContainerVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: Variant }) => {
  switch (variant) {
    default:
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
        border: none;
      `
    case 'underlined':
      return `
        background-color: transparent;
        border-bottom: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.flat_active};
        border-radius: 0 !important;
      `
  }
}
const styleInputVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: Variant }) => {
  switch (variant) {
    default:
    case 'transparent':
      return `
        color: ${theme.colors.text.base};
      `
    case 'dark':
      return `
        color: ${theme.colors.text.base};
      `
    case 'light':
      return `
        color: ${theme.colors.text.primary_inverted};
      `
  }
}

const styleInputSize = ({ theme, size }: { theme: DefaultTheme; size?: Size }) => {
  switch (size) {
    case 'sm':
      return `
      margin: ${theme.spacing.space_1} ${theme.spacing.space_2};
      `
    default:
    case 'md':
      return `
      margin: ${theme.spacing.space_2} ${theme.spacing.space_2};
      `
    case 'lg':
      return `
      margin: ${theme.spacing.space_3} ${theme.spacing.space_2};
      `
    case 'xl':
      return `
      margin: ${theme.spacing.space_4} ${theme.spacing.space_2};
      font-size: ${theme.typography.font_size_200};
      line-height: ${theme.typography.font_line_height_2};
      `
  }
}
const styleContainerSize = ({ theme, size }: { theme: DefaultTheme; size?: Size }) => {
  switch (size) {
    case 'sm':
      return `
      border-radius: ${theme.borders.radius.base};
      `
    default:
    case 'md':
      return `
      border-radius: ${theme.borders.radius.base};
      `
    case 'lg':
      return `
      border-radius: ${theme.borders.radius.medium};
      `
    case 'xl':
      return `
      border-radius: ${theme.borders.radius.medium};
      `
  }
}

const InputWrapper = styled.div<
  { bg: Color; variant?: Variant } & TextInputProps & SpaceProps & LayoutProps & BorderProps
>`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  ${styleContainerVariant}
  ${styleContainerSize}

  ${compose(space, layout, border)}
`

const StyledInput = styled.input<TextInputProps & SpaceProps & LayoutProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  flex: 1;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }

  font-size: ${p => p.theme.typography.font_size_100};
  line-height: ${p => p.theme.typography.font_line_height_1};
  font-weight: ${p => p.theme.typography.font_weight_regular};

  ${p => p.theme.responsive.medium_down} {
    font-size: ${p => p.theme.typography.font_size_300};
    line-height: ${p => p.theme.typography.font_line_height_3};
    font-weight: ${p => p.theme.typography.font_weight_regular};
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }

  ${styleInputVariant}
  ${styleInputSize}
`

const LeftComponent = styled.div`
  display: flex;
  margin-left: ${p => p.theme.spacing.space_3};
  align-items: center;
  justify-content: center;
`

const RightComponent = styled.div`
  display: flex;
  margin-right: ${p => p.theme.spacing.space_3};
  align-items: center;
  justify-content: center;
`

type Variant = 'transparent' | 'dark' | 'light' | 'underlined'
type Size = 'sm' | 'md' | 'lg' | 'xl'

export type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (value: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
  leftComponent?: React.ReactElement
  rightComponent?: React.ReactElement
  variant?: Variant
  size?: Size
  label?: string
  error?: string
}
export const TextInput = ({
  leftComponent,
  rightComponent,
  onChange,
  onKeyPress,
  value,
  label,
  error,
  size,
  ...props
}: TextInputProps & SpaceProps & Omit<LayoutProps, 'size'> & BorderProps) => {
  const { colors, spacing } = useTheme()

  return (
    <VerticalStack width={'100%'} {...props}>
      {label && (
        <Box mb={spacing.space_2}>
          <Text variant='bodyXs'>{label}</Text>
        </Box>
      )}
      <InputWrapper bg={colors.card_background} variant={props.variant} size={size} {...props}>
        {leftComponent && <LeftComponent>{leftComponent}</LeftComponent>}
        <StyledInput
          {...props}
          size={size}
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={value}
        />
        {rightComponent && <RightComponent>{rightComponent}</RightComponent>}
      </InputWrapper>
      {error && (
        <Box mt={spacing.space_2}>
          <Text variant='bodyXs' textColor={colors.text.error}>
            {error}
          </Text>
        </Box>
      )}
    </VerticalStack>
  )
}
