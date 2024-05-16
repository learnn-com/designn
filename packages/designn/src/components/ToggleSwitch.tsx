import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  SpaceProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

const ToggleSwitchContainer = styled.div<SpaceProps & ColorProps & LayoutProps>`
  display: flex;
  align-items: center;
  ${space}
  ${color}
  ${layout}
`;

const Switch = styled.input<SpaceProps & ColorProps & LayoutProps>`
  appearance: none;
  width: 40px;
  height: 20px;
  background: ${({ theme }) => theme.colors.interaction_background.primary_disabled};
  border-radius: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: ${({ theme }) => theme.colors.interaction_background.primary_active};
  }

  &:checked::before {
    left: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.interaction_background.secondary_active};
    border-radius: 50%;
    transition: left 0.3s;
  }
`;

const Label = styled.label<SpaceProps & { checked?: boolean }>`
  display: flex;
  align-items: center;
  color: ${p => p.checked ? p.theme.colors.text.primary : p.theme.colors.text.base}; 
  margin: 0;

  ${space}
`;

type ToggleSwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, ...props }) => (
  <ToggleSwitchContainer>
    <Switch 
      type="checkbox"
      {...props}
    />
    {label && (<Label ml={2}>{label}</Label>)}
  </ToggleSwitchContainer>
);

