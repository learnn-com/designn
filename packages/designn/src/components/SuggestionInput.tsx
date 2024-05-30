import styled, { DefaultTheme } from 'styled-components'
import { TextInput, TextInputProps, TextInputVariant } from './TextInput'
import { useEffect, useRef, useState } from 'react';

const styleButtonVariant = ({ theme, variant }: { theme: DefaultTheme; variant?: TextInputVariant }) => {
  switch (variant) {
    case 'light':
      return `
        color: ${theme.colors.text.primary_inverted};
        background-color: ${theme.colors.interaction_background.primary_active};
        border: none;
      `
    default:
    case 'dark':
      return `
        color: ${theme.colors.text.base};
        background-color: ${theme.colors.interaction_background.secondary_active};
        border: ${theme.borders.width.base} solid ${theme.colors.interaction_outline.secondary_active};
      `
  }
}

const StyledSuggestionInput = styled.div<TextInputProps>`
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
      if (p.size === 'sm') {
        return `top: ${p.theme.spacing.space_8};`
      }
      if (p.size === 'md') {
        return `top: ${p.theme.spacing.space_10};`
      }
      if (p.size === 'lg') {
        return `top: ${p.theme.spacing.space_16};`
      }
      if (p.size === 'xl') {
        return `top: ${p.theme.spacing.space_20};`
      }
      return `top: ${p.theme.spacing.space_12};`
    }}
  }
  .items ul {
    list-style: none;
    padding: 0;
    width: 100%;
    margin: ${p => p.theme.spacing.space_3} 0;
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
        return `background-color:${p.theme.colors.interaction_background.flat_active};color:${p.theme.colors.text.primary};`
      }
      return ''
    }}
  }
`

export type Suggestion = {id: string, label: string}
type SuggestionInputProps = TextInputProps & {
  suggestions: Suggestion[]
  activeSuggestionId?: string
  onSuggestionSelected: (suggestion: Suggestion) => void
}

export const SuggestionInput = ({
  suggestions,
  onSuggestionSelected,
  activeSuggestionId,
  ...props
}: SuggestionInputProps) => {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSuggestionClick = (suggestion: Suggestion) => {
    onSuggestionSelected(suggestion)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setOpen(true)
  }, [suggestions])


  return (
    <StyledSuggestionInput {...props} ref={containerRef}>
      <TextInput
        {...props}
      />
      {(suggestions.length > 0 && isOpen) && (
        <div className='items'>
        <ul role='menu' aria-orientation='vertical'>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className={`item ${suggestion.id === activeSuggestionId ? 'selected' : ''} `}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span>{suggestion.label}</span>
            </li>
          ))}
        </ul>
        </div>
      )}
    </StyledSuggestionInput>
  )
}