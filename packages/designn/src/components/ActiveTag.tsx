import { LayoutProps, SpaceProps, layout, space, compose } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Text } from './Text'
import { useTheme, styled } from 'styled-components'
import { CircularButton } from './CircularButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

type Variant = 'delete' | 'select'

export type ActiveTagProps = {
  body: string
  variant: Variant
  onClick: (selected?: boolean) => void
  selected?: boolean
}

export const ActiveTag = ({
  body,
  variant,
  onClick,
  selected,
  ...props
}: ActiveTagProps & SpaceProps & LayoutProps) => {
  const [isSelected, setSelected] = useState(selected)
  const [isHovered, setHovered] = useState(false)
  const { borders, spacing, colors } = useTheme()

  const handleClick = () => {
    onClick(!isSelected)
    setSelected(!isSelected)
  }

  switch (variant) {
    case 'delete':
      return (
        <HorizontalStack
          borderRadius={borders.radius.full}
          borderColor={colors.interaction_outline.secondary_active}
          bg={colors.interaction_background.secondary_active}
          borderWidth={borders.width.base}
          borderStyle='solid'
          py='5px'
          px='8px'
          justifyContent='center'
          alignItems='center'
          {...props}
        >
          <Text variant='bodyXs' fontWeight='regular' color='primary' mr={spacing.space_2}>
            {body}
          </Text>
          <CircularButton
            variant='flat'
            size='xs'
            onPress={onClick}
            icon={<FontAwesomeIcon icon={faClose} />}
          />
        </HorizontalStack>
      )
    case 'select':
      return (
        <SelectTag
          onClick={handleClick}
          {...props}
          selected={isSelected}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className='circle'>
            {isSelected ? (
              isHovered ? (
                <FontAwesomeIcon icon={faClose} color='#fff' />
              ) : (
                <FontAwesomeIcon icon={faCheck} color='#fff' />
              )
            ) : (
              <></>
            )}
          </div>
          <span className='text'>{body}</span>
        </SelectTag>
      )
  }
}

const SelectTag = styled.button<{ selected?: boolean, purpleTheme?: boolean } & SpaceProps & LayoutProps>`
  background-color: ${p => p.theme.colors.interaction_background.secondary_active};
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: ${p => p.theme.borders.width.base};
  border-color: ${p => p.theme.colors.interaction_outline.secondary_active};
  border-radius: ${p => p.theme.borders.radius.full};
  color: ${p => p.theme.colors.text.dimmed};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  &:hover {
    background-color: ${p => p.theme.colors.interaction_outline.secondary_active};
    color: ${p => p.theme.colors.text.primary};
    ${p => p.purpleTheme && `
      .circle {
        border-color: ${p.theme.colors.interaction_outline.primary_active};
        background-color: ${p.theme.colors.interaction_background.primary_active};
      }
    `}
  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 30px;
    border: 1px solid ${p => p.theme.colors.interaction_outline.secondary_active};
    background-color: ${p => p.theme.colors.interaction_background.secondary_active};
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 1px;
  }

  cursor: pointer;
  .text {
    font-size: ${p => p.theme.typography.font_size_100};
    font-weight: ${p => p.theme.typography.font_weight_regular};
    margin-left: ${p => p.theme.spacing.space_2};
  }

  ${p => {
    if (p.selected) {
      return `background-color: ${p.theme.colors.interaction_background.primary_active}; color: ${p.theme.colors.text.primary_inverted};`
    }
    return ''
  }}

  ${compose(space, layout)};
`
