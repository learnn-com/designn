import { ReactNode } from 'react'
import { undefinedAsFalse } from '../utils/props'
import styled from 'styled-components'
import { FontWeightAlias } from 'theme/tokens/typography'

type Variant = 'primary' | 'secondary' | 'tertiary'

export type ButtonProps = {
  /** Text to display */
  label: string
  /** Hierarchy of the button */
  variant: Variant
  /** On press action */
  onPress: () => void
  /** Icon to display */
  icon?: ReactNode
  /** HTML id attribute */
  id?: string
  /** Id used for tests */
  testid?: string
  /** Weather or not the button is disabled */
  disabled?: boolean
  /** Where to position the icon */
  iconPosition?: 'left' | 'right'
  /** Component size */
  size?: 'sm' | 'md' | 'lg'
  /** Border type */
  squareBorder?: boolean
  textFontWeight?: FontWeightAlias
}

export function Button({
  label,
  variant,
  onPress,
  icon,
  id,
  testid,
  disabled,
  iconPosition = 'left',
  size,
  squareBorder,
  textFontWeight,
}: ButtonProps) {
  return (
    <Component
      id={id}
      onClick={onPress}
      icon={icon}
      iconPosition={iconPosition}
      variant={variant}
      textFontWeight={textFontWeight}
      disabled={undefinedAsFalse(disabled)}
      size={size}
      label={label}
      data-testid={testid}
      squareBorder={undefinedAsFalse(squareBorder)}
    >
      {icon && iconPosition === 'left' && <div className='icon'>{icon}</div>}
      {label}
      {icon && iconPosition === 'right' && <div className='icon'>{icon}</div>}
    </Component>
  )
}

const Component = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  letter-spacing: -0.03em;
  border-radius: ${p =>
    p.squareBorder ? p.theme.borders.radius.medium : p.theme.borders.radius.full};
  ${p => `font-weight:${p.theme.typography.font_weight_semibold};`}
  ${p => {
    if (p.size === 'sm') {
      return `font-size: ${p.theme.typography.font_size_100};
              line-height: ${p.theme.typography.font_line_height_1};
              `
    }
    if (p.size === 'md') {
      return `font-size: ${p.theme.typography.font_size_200};
              line-height: ${p.theme.typography.font_line_height_2};`
    }
    if (p.size === 'lg') {
      return `font-size: ${p.theme.typography.font_size_400};
              line-height: ${p.theme.typography.font_line_height_4};`
    }

    return `font-size: ${p.theme.typography.font_size_200};
            line-height: ${p.theme.typography.font_line_height_2};`
  }}
  ${p =>
    p.textFontWeight
      ? `font-weight:${p.theme.typography[`font_weight_${p.textFontWeight}`]};`
      : `font-weight:${p.theme.typography.font_weight_black};`}
  ${p => {
    if (p.variant === 'primary') {
      return `background-color: ${p.theme.colors.interaction_background.primary_active};
              color: ${p.theme.colors.interaction_foreground.primary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.primary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.primary_hover};
                color: ${p.theme.colors.interaction_foreground.primary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.primary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.primary_disabled};
                color: ${p.theme.colors.interaction_foreground.primary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.primary_disabled};
              }
              `
    }
    if (p.variant === 'secondary') {
      return `background-color: ${p.theme.colors.interaction_background.secondary_active};
              color: ${p.theme.colors.interaction_foreground.secondary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.secondary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.secondary_hover};
                color: ${p.theme.colors.interaction_foreground.secondary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.secondary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.secondary_disabled};
                color: ${p.theme.colors.interaction_foreground.secondary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.secondary_disabled};
              }
              `
    }
    if (p.variant === 'tertiary') {
      return `background-color: ${p.theme.colors.interaction_background.tertiary_active};
              color: ${p.theme.colors.interaction_foreground.tertiary_active};
              border: 1px solid ${p.theme.colors.interaction_outline.tertiary_active};
              &:hover {
                background-color: ${p.theme.colors.interaction_background.tertiary_hover};
                color: ${p.theme.colors.interaction_foreground.tertiary_hover};
                border: 1px solid ${p.theme.colors.interaction_outline.tertiary_hover};
              }
              &:disabled {
                background-color: ${p.theme.colors.interaction_background.tertiary_disabled};
                color: ${p.theme.colors.interaction_foreground.tertiary_disabled};
                border: 1px solid ${p.theme.colors.interaction_outline.tertiary_disabled};
              }
              `
    }

    return ''
  }}

  .icon {
    ${p => {
      if (p.iconPosition === 'left') return `margin-right: ${p.theme.spacing.space_2};`
      else return `margin-left: ${p.theme.spacing.space_2};`
    }}
  }

  pointer-events: ${p => (p.disabled ? 'none' : null)};
  cursor: ${p => (p.disabled ? 'normal' : 'pointer')};
`
