import { useState, useRef } from 'react'
import { LayoutProps, SpaceProps, BorderProps, compose, space, layout, border } from 'styled-system'
import styled, { DefaultTheme, useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useOutsideClick } from '../utils/hooks'
import { Text } from './Text'
import { Box } from './Box'

type DropdownItem = { id: string; label: string }
type Variant = 'transparent' | 'dark' | 'light'
type Size = 'sm' | 'md' | 'lg' | 'xl'

export type DropdownProps = {
  onSelect?: (item: DropdownItem) => void
  items: DropdownItem[]
  selectedId?: string
  variant?: Variant
  size?: Size
  label?: string
}

const styleButtonVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: Variant }) => {
  switch (variant) {
    default:
    case 'transparent':
      return `
        color: ${theme.colors.text.base};
        background-color: transparent;
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'dark':
      return `
        color: ${theme.colors.text.base};
        background-color: ${theme.colors.interaction_background.secondary_active};
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
    case 'light':
      return `
        color: ${theme.colors.text.primary_inverted};
        background-color: ${theme.colors.interaction_background.primary_active};
        border: none;
      `
  }
}

const styleButtonSize = ({ theme, size }: { theme: DefaultTheme; size?: Size }) => {
  switch (size) {
    case 'sm':
      return `
      padding: ${theme.spacing.space_1} ${theme.spacing.space_2};
      border-radius: ${theme.borders.radius.base};
      `
    default:
    case 'md':
      return `
      padding: ${theme.spacing.space_2} ${theme.spacing.space_2};
      border-radius: ${theme.borders.radius.base};
      `
    case 'lg':
      return `
      padding: ${theme.spacing.space_3} ${theme.spacing.space_2};
      border-radius: ${theme.borders.radius.medium};
      `
    case 'xl':
      return `
      padding: ${theme.spacing.space_4} ${theme.spacing.space_2};
      font-size: ${theme.typography.font_size_200};
      line-height: ${theme.typography.font_line_height_2};
      border-radius: ${theme.borders.radius.medium};
      `
  }
}

export const Dropdown = ({
  onSelect,
  selectedId,
  variant,
  size,
  items,
  label,
  ...props
}: DropdownProps & SpaceProps & LayoutProps & BorderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? items.find(item => item.id === selectedId) : undefined,
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { spacing } = useTheme()

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item)
    onSelect && onSelect(item)
    setIsOpen(false)
  }

  useOutsideClick(dropdownRef, () => setIsOpen(false))

  return (
    <StyledDropdown ref={dropdownRef} variant={variant} label={label} size={size} {...props}>
      {label && (
        <Box mb={spacing.space_2}>
          <Text variant='bodyXs'>{label}</Text>
        </Box>
      )}
      <StyledButton
        variant={variant}
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Apri dropdown'
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        <span>{selectedItem?.label || "Seleziona un'opzione"}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </StyledButton>
      {isOpen ? (
        <div className='items'>
          <ul role='menu' aria-orientation='vertical'>
            {items.map(item => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={`item ${item.id === selectedId ? 'selected' : ''} `}
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div<
  { variant?: Variant; size?: Size; label?: string } & SpaceProps & LayoutProps & BorderProps
>`
  position: relative;
  display: flex;
  flex-direction: column;
  .items {
    position: absolute;
    display: flex;
    width: 100%;
    z-index: 1000;
    overflow-y: auto;
    max-height: 250px;
    border-radius: ${p => p.theme.borders.radius.base};
    ${styleButtonVariant}
    border:none;
    padding-left: ${p => p.theme.spacing.space_1};
    padding-right: ${p => p.theme.spacing.space_1};
    ${p => {
      if (p.label) {
        if (p.size === 'sm' || p.size === 'md') {
          return `top: ${p.theme.spacing.space_16};`
        }
        if (p.size === 'lg') {
          return `top: ${p.theme.spacing.space_20};`
        }
        if (p.size === 'xl') {
          return `top: ${p.theme.spacing.space_24};`
        }
        return `top: ${p.theme.spacing.space_16};`
      } else {
        if (p.size === 'sm') {
          return `top: ${p.theme.spacing.space_8};`
        }
        if (p.size === 'md') {
          return `top: ${p.theme.spacing.space_10};`
        }
        if (p.size === 'lg') {
          return `top: ${p.theme.spacing.space_12};`
        }
        if (p.size === 'xl') {
          return `top: ${p.theme.spacing.space_16};`
        }
        return `top: ${p.theme.spacing.space_12};`
      }
    }}
  }
  .items ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  .items::-webkit-scrollbar {
    display: none;
  }
  .item {
    cursor: pointer;
    margin-bottom: ${p => p.theme.spacing.space_1};
    padding-top: ${p => p.theme.spacing.space_2};
    padding-bottom: ${p => p.theme.spacing.space_2};
    font-size: ${p => p.theme.typography.font_size_100};
    line-height: ${p => p.theme.typography.font_line_height_1};
    font-weight: ${p => p.theme.typography.font_weight_regular};
    padding-left: ${p => p.theme.spacing.space_6};
    padding-right: ${p => p.theme.spacing.space_6};

    border-radius: ${p => p.theme.borders.radius.base};

    ${p => p.theme.responsive.medium_down} {
      font-size: ${p => p.theme.typography.font_size_300};
      line-height: ${p => p.theme.typography.font_line_height_3};
      font-weight: ${p => p.theme.typography.font_weight_regular};
    }
  }
  .item:last-of-type {
    margin-bottom: 0;
  }
  .selected {
    ${p => {
      if (p.variant === 'transparent') {
        return `background-color:${p.theme.colors.interaction_background.flat_active}; `
      }
      if (p.variant === 'dark') {
        return `background-color:${p.theme.colors.interaction_background.flat_active}; `
      }
      if (p.variant === 'light') {
        return `background-color:${p.theme.colors.interaction_background.flat_active};color:${p.theme.colors.text.primary} `
      }
      return ''
    }}
  }

  ${compose(space, layout, border)}
`

const StyledButton = styled.button<{ size?: Size; variant?: Variant }>`
  display: flex;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  font-size: ${p => p.theme.typography.font_size_100};
  line-height: ${p => p.theme.typography.font_line_height_1};
  font-weight: ${p => p.theme.typography.font_weight_regular};

  ${p => p.theme.responsive.medium_down} {
    font-size: ${p => p.theme.typography.font_size_300};
    line-height: ${p => p.theme.typography.font_line_height_3};
    font-weight: ${p => p.theme.typography.font_weight_regular};
  }

  &:focus {
    outline: none;
  }

  ${styleButtonVariant}
  ${styleButtonSize}
`
