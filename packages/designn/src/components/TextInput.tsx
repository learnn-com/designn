import React from 'react'
import styled, { useTheme } from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps } from 'styled-system'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  ${compose(space, layout, border)}
`

const StyledInput = styled.input`
  color: ${p => p.theme.colors.text.base};
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
    color: ${p => p.theme.colors.text.base};
  }

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

export type TextInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (value: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
  leftComponent?: React.ReactElement
  rightComponent?: React.ReactElement
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
      borderStyle='solid'
      borderColor={colors.interaction_outline.secondary_active}
      borderWidth={borders.width.medium}
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
