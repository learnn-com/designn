import React from 'react'
import styled from 'styled-components'
import { space, layout, border, compose, SpaceProps, LayoutProps } from 'styled-system'



const InputWrapper = styled.textarea`
  padding: ${p => p.theme.spacing.space_3};
  font-size: ${p => p.theme.typography.font_size_base};
  border-radius: ${p => p.theme.borders.radius.large};
  border: 0;
  width: 100%;
  background-color: ${p => p.theme.colors.edge};
  color: ${p => p.theme.colors.text.base};

  :focus {
    outline: 0;
  }
  
  ${compose(space, layout, border)}
`

export type TextAreaProps = Omit<React.AreaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  rows?: number
}
export const TextArea = ({
  onChange,
  value,
  ...props
}: TextAreaProps & SpaceProps & LayoutProps) => {

  return (
    <InputWrapper
      {...props}
      onChange={onChange}
      value={value}
    />
  )
}
