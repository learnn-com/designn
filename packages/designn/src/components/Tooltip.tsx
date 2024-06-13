import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Text } from './Text'
import { Spacing } from 'theme/tokens/spacing';

interface TooltipProps {
  label: string;
  position: 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
  variant: 'dark' | 'light'
  width?: Spacing
  children: ReactNode;
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;


const styleTooltipVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: 'dark' | 'light' }) => {
    switch (variant) {
        case 'light':
            return `
                background-color: ${theme.colors.interaction_background.primary_active};
            `
        default:
        case 'dark':
            return `
                background-color: ${theme.colors.modal_background};
            `
    }
}

const TooltipText = styled.div<{ position: string, variant?: 'dark' | 'light', width?: Spacing }>`
  visibility: hidden;
  text-align: center;
  border-radius: ${p => p.theme.borders.radius.base};
  padding: ${p => p.theme.spacing.space_3};
  position: absolute;
  z-index: 9999999;
  opacity: 0;
  transition: opacity 0.3s;
  width: ${p => p.width ?? '100px'};

  ${styleTooltipVariant}
  
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return 'bottom: 100%; right: 0; transform: translateY(-5px);';
      case 'top':
        return 'bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-5px);';
      case 'top-right':
        return 'bottom: 100%; left: 0; transform: translateY(-5px);';
      case 'left':
        return 'top: 50%; left: -5px; transform: translateX(-100%) translateY(-50%);';
      case 'right':
        return 'top: 50%; right: -5px; transform: translateX(100%) translateY(-50%);';
      case 'bottom-left':
        return 'top: 100%; right: 0; transform: translateY(5px);';
      case 'bottom':
        return 'top: 100%; left: 50%; transform: translateX(-50%) translateY(5px);';
      case 'bottom-right':
        return 'top: 100%; left: 0; transform: translateY(5px);';
      default:
        return '';
    }
  }}
`;

const TooltipWrapper = styled.div`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({ label, position, width, variant, children }) => {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipText position={position} variant={variant} width={width}>
            <Text variant='bodyXs' alignment='center' color={variant === 'dark' ? 'primary' : 'primary_inverted'}>{label}</Text>
        </TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  );
};
