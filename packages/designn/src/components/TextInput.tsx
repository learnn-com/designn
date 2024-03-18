import React from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps } from 'styled-system'

const styleContainerVariant = ({ theme, variant }: { theme: DefaultTheme; variant: Variant }) => {
  switch (variant) {
    default:
    case 'transparent':
      return `
        background-color: transparent;
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'dark':
      return `
        background-color: ${theme.colors.bg_app};
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'light':
      return `
        background-color: ${theme.colors.interaction_background.primary_active};
        border: none;
      `
  }
}
const styleInputVariant = ({ theme, variant }: { theme: DefaultTheme; variant: Variant }) => {
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


const styleInputSize = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
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
  }
}
const styleContainerSize = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
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
      border-radius: ${theme.borders.radius.base};
      `
  }
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  ${styleContainerVariant}
  ${styleContainerSize}

  ${compose(space, layout, border)}
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  flex: 1;

  font-size: ${p => p.theme.typography.font_size_100};
  line-height: ${p => p.theme.typography.font_line_height_1};
  font-weight: ${p => p.theme.typography.font_weight_regular};

  :focus {
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

type Variant = 'transparent' | 'dark' | 'light'
type Size = 'sm' | 'md' | 'lg'

export type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (value: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
  leftComponent?: React.ReactElement
  rightComponent?: React.ReactElement
  variant?: Variant
  size?: Size
}
export const TextInput = ({
  leftComponent,
  rightComponent,
  onChange,
  onKeyPress,
  value,
  ...props
}: TextInputProps & SpaceProps & LayoutProps) => {
  const { colors } = useTheme()

  return (
    <InputWrapper
      bg={colors.card_background}
      variant={props.variant}
      {...props}
    >
      {leftComponent && <LeftComponent>{leftComponent}</LeftComponent>}
      <StyledInput
        {...props}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
      {rightComponent && <RightComponent>{rightComponent}</RightComponent>}
    </InputWrapper>
  )
}
