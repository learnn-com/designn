import React from 'react';
import styled from 'styled-components';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps } from 'styled-system';
import { HorizontalStack } from './HorizontalStack';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  label?: string;
}

const StyledCheckbox = styled.input<CheckboxProps & SpaceProps & LayoutProps & ColorProps>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${p => p.checked ? p.theme.colors.text.primary : p.theme.colors.interaction_outline.secondary_active};
  background-color: transparent;
  border-radius: ${p => p.theme.borders.width.large};
  display: inline-block;
  position: relative;
  margin-right: ${p => p.theme.spacing.space_2};
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")
  }

  ${space}
  ${layout}
  ${color}
`;

const Label = styled.label<SpaceProps & { checked?: boolean }>`
  display: flex;
  align-items: center;
  color: ${p => p.checked ? p.theme.colors.text.primary : p.theme.colors.text.base}; 
  margin: 0;

  ${space}
`;

export const Checkbox: React.FC<CheckboxProps> = ({ checked, label, ...props }) => (
  <HorizontalStack alignItems='center'>
    <StyledCheckbox type="checkbox" checked={checked} {...props} />
    <Label checked={checked}>{label}</Label>
  </HorizontalStack>
);

