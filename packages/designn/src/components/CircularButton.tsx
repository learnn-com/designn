import { ReactNode } from 'react'
import { undefinedAsFalse } from '../utils/props'
import styled, { DefaultTheme } from 'styled-components'
import { SpaceProps, space } from 'styled-system'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'flat'

export type CircularButtonProps = {
  /** Hierarchy of the CircularButton */
  variant: Variant
  /** On press action */
  onPress: () => void
  /** Icon to display */
  icon?: ReactNode
  /** HTML id attribute */
  id?: string
  /** Weather or not the CircularButton is disabled */
  disabled?: boolean
  /** Component size */
  size?: 'sm' | 'md' | 'lg'
}

export function CircularButton({
  variant,
  onPress,
  icon,
  id,
  disabled,
  size,
  ...props
}: CircularButtonProps & SpaceProps) {
  return (
    <Component
      id={id}
      onClick={onPress}
      icon={icon}
      variant={variant}
      disabled={undefinedAsFalse(disabled)}
      size={size}
      {...props}
    >
      <div className='icon'>{icon}</div>
    </Component>
  )
}

const Component = styled.button<CircularButtonProps & SpaceProps>`
  ${space}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .icon > * {
    width: 100%;
    height: 100%;
  }
  ${({ theme, ...p }: CircularButtonProps & { theme: DefaultTheme }) => {
    switch (p.size) {
      default:
      case 'sm':
        return `
          width: ${theme.spacing.space_8};
          height: ${theme.spacing.space_8};
          border-radius: ${theme.spacing.space_8};

          .icon {
            margin-top: -2px;
            width: ${theme.spacing.space_3};
            height: ${theme.spacing.space_3};
          }
        `
      case 'md':
        return `
          width: ${theme.spacing.space_12};
          height: ${theme.spacing.space_12};
          border-radius: ${theme.spacing.space_12};

          .icon {
            width: ${theme.spacing.space_5};
            height: ${theme.spacing.space_5};
          }
        `
      case 'lg':
        return `
          width: ${theme.spacing.space_16};
          height: ${theme.spacing.space_16};
          border-radius: ${theme.spacing.space_16};

          .icon {
            width: ${theme.spacing.space_8};
            height: ${theme.spacing.space_8};
          }
        `
    }
  }}
  ${p => {
    if (p.variant === 'primary') {
      return `background-color: ${p.theme.colors.interaction_background.primary_active};
              fill: ${p.theme.colors.interaction_foreground.primary_active};
              color: ${p.theme.colors.interaction_foreground.primary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.primary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.primary_hover};
                fill: ${p.theme.colors.interaction_foreground.primary_hover};
                color: ${p.theme.colors.interaction_foreground.primary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.primary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.primary_disabled};
                fill: ${p.theme.colors.interaction_foreground.primary_disabled};
                color: ${p.theme.colors.interaction_foreground.primary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.primary_disabled};
              }
              `
    }
    if (p.variant === 'flat') {
      return `background-color: ${p.theme.colors.interaction_background.flat_active};
              fill: ${p.theme.colors.interaction_foreground.flat_active};
              color: ${p.theme.colors.interaction_foreground.flat_active};
              border: 1px solid ${p.theme.colors.interaction_outline.flat_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.flat_hover};
                fill: ${p.theme.colors.interaction_foreground.flat_hover};
                color: ${p.theme.colors.interaction_foreground.flat_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.flat_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.flat_disabled};
                fill: ${p.theme.colors.interaction_foreground.flat_disabled};
                color: ${p.theme.colors.interaction_foreground.flat_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.flat_disabled};
              }
              `
    }
    if (p.variant === 'secondary') {
      return `background-color: ${p.theme.colors.interaction_background.secondary_active};
              fill: ${p.theme.colors.interaction_foreground.secondary_active};
              color: ${p.theme.colors.interaction_foreground.secondary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.secondary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.secondary_hover};
                fill: ${p.theme.colors.interaction_foreground.secondary_hover};
                color: ${p.theme.colors.interaction_foreground.secondary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.secondary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.secondary_disabled};
                fill: ${p.theme.colors.interaction_foreground.secondary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.secondary_disabled};
              }
              `
    }
    if (p.variant === 'tertiary') {
      return `background-color: ${p.theme.colors.interaction_background.tertiary_active};
              fill: ${p.theme.colors.interaction_foreground.tertiary_active};
              color: ${p.theme.colors.interaction_foreground.tertiary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.tertiary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.tertiary_hover};
                fill: ${p.theme.colors.interaction_foreground.tertiary_hover};
                color: ${p.theme.colors.interaction_foreground.tertiary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.tertiary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.tertiary_disabled};
                fill: ${p.theme.colors.interaction_foreground.tertiary_disabled};
                color: ${p.theme.colors.interaction_foreground.tertiary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.tertiary_disabled};
              }
              `
    }

    return ''
  }}
  pointer-events:${p => (p.disabled ? 'none' : null)};
  cursor: ${p => (p.disabled ? 'normal' : 'pointer')};

  :focus {
    outline: 0;
  }
`
