import { ReactNode } from 'react'
import { undefinedAsFalse } from '../utils/props'
import styled from 'styled-components'
import { FontWeightAlias } from 'theme/tokens/typography'
import { MarginProps, SpaceProps, WidthProps, HeightProps, compose, margin, space, width, height } from 'styled-system'

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
  /** Weather or not the button is loading */
  loading?: boolean
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
  loading,
  iconPosition = 'left',
  size,
  squareBorder = true,
  textFontWeight,
  ...props
}: ButtonProps & SpaceProps & MarginProps & WidthProps & HeightProps) {
  return (
    <Component
      id={id}
      onClick={onPress}
      icon={icon}
      iconPosition={iconPosition}
      variant={variant}
      textFontWeight={textFontWeight}
      disabled={undefinedAsFalse(disabled) || undefinedAsFalse(loading)}
      size={size}
      label={label}
      data-testid={testid}
      squareBorder={undefinedAsFalse(squareBorder)}
      {...props}
    >
      {loading && <div className='loader'></div>}
      {icon && iconPosition === 'left' && <div className='icon'>{icon}</div>}
      {label}
      {icon && iconPosition === 'right' && <div className='icon'>{icon}</div>}
    </Component>
  )
}

const Component = styled.button<Omit<ButtonProps & SpaceProps & MarginProps & WidthProps & HeightProps, 'onPress'>>`
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
    switch (p.size) {
      case 'sm': 
        return `font-size: ${p.theme.typography.font_size_100};
                line-height: ${p.theme.typography.font_line_height_1};`
      case 'md': 
        return `font-size: ${p.theme.typography.font_size_200};
                line-height: ${p.theme.typography.font_line_height_2};`
      case 'lg': 
        return `font-size: ${p.theme.typography.font_size_300};
                line-height: ${p.theme.typography.font_line_height_3};
                padding: 13px 20px;`
      default: 
        return `font-size: ${p.theme.typography.font_size_200};
                line-height: ${p.theme.typography.font_line_height_2};`
    }
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
              &:focus {
                outline: none;
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

  .loader {
    width: ${p => p.theme.spacing.space_3};
    padding: ${p => p.theme.spacing.space_1};
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: ${p => p.theme.spacing.space_2};
    ${p => {
      switch (p.variant) {
        case 'primary': return `background: ${p.theme.colors.interaction_foreground.primary_active};`
        case 'secondary': return `background: ${p.theme.colors.interaction_foreground.secondary_active};`
        case 'tertiary': return `background: ${p.theme.colors.interaction_foreground.tertiary_active};`
      }
    }}
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {to{transform: rotate(1turn)}}
  
  ${compose(space, margin, width, height)}
`
