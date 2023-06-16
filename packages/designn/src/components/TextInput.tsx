import React from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps } from 'styled-system'

const styleContainerVariant = ({theme, variant}: {theme: DefaultTheme, variant: Variant}) => {
  switch (variant) {
    default:
    case 'transparent':
      return `
        background-color: transparent;
        border: ${theme.borders.width.medium} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'dark':
      return `
        background-color: ${theme.colors.bg_app};
        border: ${theme.borders.width.medium} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'light':
      return `
        background-color: ${theme.colors.interaction_background.primary_active};
        border: none;
      `
  }
}
const styleInputVariant = ({theme, variant}: {theme: DefaultTheme, variant: Variant}) => {
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  ${styleContainerVariant}

  ${compose(space, layout, border)}
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 ${p => p.theme.spacing.space_3};
  flex: 1;

  font-size: ${p => p.theme.typography.font_size_100};
  line-height: ${p => p.theme.typography.font_line_height_1};
  font-weight: ${p => p.theme.typography.font_weight_regular};

  :focus {
    outline: none;
    background-color: transparent;
  }

  ${styleInputVariant}

  ${compose(space, layout)}
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

export type TextInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (value: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
  leftComponent?: React.ReactElement
  rightComponent?: React.ReactElement
  variant?: Variant
} & React.InputHTMLAttributes<HTMLInputElement>
export const TextInput = ({
  leftComponent,
  rightComponent,
  onChange,
  onKeyPress,
  value,
  ...props
}: TextInputProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  return (
    <InputWrapper
      borderRadius={borders.radius.large}
      bg={colors.card_background}
      variant={props.variant}
    >
      {leftComponent && <LeftComponent>{leftComponent}</LeftComponent>}
      <StyledInput 
      my={spacing.space_2} 
      {...props}
      onChange={onChange} 
      onKeyPress={onKeyPress} 
      value={value}
      />
      {rightComponent && <RightComponent>{rightComponent}</RightComponent>}
    </InputWrapper>
  )
}
