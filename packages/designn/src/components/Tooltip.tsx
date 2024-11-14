import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'
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

const styleTooltipVariant = ({
  theme,
  variant,
}: {
  theme: DefaultTheme
  variant?: 'dark' | 'light'
}) => {
  switch (variant) {
    case 'light':
      return `
                background-color: ${theme.colors.interaction_background.primary_active};
            `
    default:
    case 'dark':
      return `
                background-color: ${theme.colors.interaction_background};
            `
  }
}

const TooltipText = styled.div<{
  variant?: 'dark' | 'light'
  width?: Spacing
  top: number
  left: number
  delaySeconds: number
}>`
  visibility: hidden;
  text-align: center;
  border-radius: ${p => p.theme.borders.radius.base};
  padding: ${p => p.theme.spacing.space_3};
  position: fixed;
  z-index: 9999999;
  opacity: 0;
  transition: opacity 0.3s, visibility 0s ${p => p.delaySeconds ?? 0}s;

  width: ${p => p.width ?? '100px'};
  overflow: visible;
  pointer-events: none;
  top: ${p => p.top}px;
  left: ${p => p.left}px;

  ${styleTooltipVariant}
`

const TooltipWrapper = styled.div`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  position,
  width,
  variant,
  children,
  customComponent,
  delaySeconds = 0,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  const updateTooltipPosition = () => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    const tooltipRect = tooltipRef.current?.getBoundingClientRect()

    if (!containerRect) return

    let top = 0
    let left = 0

    switch (position) {
      case 'top-left':
        top = containerRect.top - tooltipRect!.height - 5
        left = containerRect.left - tooltipRect!.width
        break
      case 'top':
        top = containerRect.top - tooltipRect!.height - 5
        left = containerRect.left
        break
      case 'top-right':
        top = containerRect.top - tooltipRect!.height - 5
        left = containerRect.left + containerRect!.width - 10
        break
      case 'left':
        top = containerRect.top
        left = containerRect.left - tooltipRect!.width - 5
        break
      case 'right':
        top = containerRect.top
        left = containerRect.left + containerRect!.width + 5
        break
      case 'bottom-left':
        top = containerRect.bottom + 5
        left = containerRect.left - tooltipRect!.width
        break
      case 'bottom':
        top = containerRect.bottom + 5
        left = containerRect.left
        break
      case 'bottom-right':
        top = containerRect.bottom + 5
        left = containerRect.left + containerRect!.width
        break
      default:
        break
    }

    setTooltipPosition({ top, left })
  }

  useEffect(() => {
    updateTooltipPosition()
    window.addEventListener('resize', updateTooltipPosition)
    window.addEventListener('scroll', updateTooltipPosition)

    return () => {
      window.removeEventListener('resize', updateTooltipPosition)
      window.removeEventListener('scroll', updateTooltipPosition)
    }
  }, [])

  return (
    <TooltipContainer ref={containerRef}>
      <TooltipWrapper>
        {children}
        <TooltipText
          ref={tooltipRef}
          variant={variant}
          width={width}
          top={tooltipPosition.top}
          left={tooltipPosition.left}
          delaySeconds={delaySeconds}
        >
          {!customComponent && (
            <Text
              variant='bodyXs'
              alignment='center'
              color={variant === 'dark' ? 'primary' : 'primary_inverted'}
            >
              {label}
            </Text>
          )}
          {customComponent}
        </TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  )
}
