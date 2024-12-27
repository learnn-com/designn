import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Text } from './Text'
import { Spacing } from 'theme/tokens/spacing'

interface TooltipProps {
  label: string
  position:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'left'
    | 'right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right'
  variant: 'dark' | 'light'
  width?: Spacing
  children: ReactNode
  customComponent?: ReactNode
  delaySeconds?: number
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`

const styleTooltipVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: 'dark' | 'light' }) => {
  switch (variant) {
    case 'light':
      return `
                background-color: ${theme.colors.interaction_background.primary_active};
            `
    default:
    case 'dark':
      return `
                background-color: ${theme.colors.item_hover};
            `
  }
}

const TooltipText = styled.div<{
  variant?: 'dark' | 'light';
  width?: Spacing;
  position: 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
  delaySeconds: number;
}>`
  visibility: hidden;
  text-align: center;
  border-radius: ${p => p.theme.borders.radius.base};
  padding: ${p => p.theme.spacing.space_3};
  position: absolute;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s, visibility 0s ${p => p.delaySeconds}s;
  width: ${p => p.width ?? '100px'};
  pointer-events: none;

  ${styleTooltipVariant}

  ${p => {
    switch (p.position) {
      case 'top-left':
        return `
          bottom: 100%;
          left: 0;
          margin-bottom: 8px;
          transform: translateX(-100%);
        `;
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        `;
      case 'top-right':
        return `
          bottom: 100%;
          right: 0;
          margin-bottom: 8px;
          transform: translateX(100%);
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 8px;
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
        `;
      case 'bottom-left':
        return `
          top: 100%;
          left: 0;
          margin-top: 8px;
          transform: translateX(-100%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
        `;
      case 'bottom-right':
        return `
          top: 100%;
          right: 0;
          margin-top: 8px;
          transform: translateX(100%);
        `;
      default:
        return '';
    }
  }}
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  position,
  width,
  variant,
  children,
  customComponent,
  delaySeconds = 0,
}) => {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipText
          variant={variant}
          width={width}
          position={position}
          delaySeconds={delaySeconds}
        >
          {!customComponent && (
            <Text
              variant="bodyXs"
              alignment="center"
              color={variant === 'dark' ? 'primary' : 'primary_inverted'}
            >
              {label}
            </Text>
          )}
          {customComponent}
        </TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  );
};