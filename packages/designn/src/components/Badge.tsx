import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Text } from './Text'
import { useTheme } from 'styled-components'
import { ReactNode } from 'react'

type Variant = 'outlined' | 'contained' | 'flat'

export type BadgeProps = {
  body: string
  variant: Variant
  squareBorder?: boolean
  icon?: ReactNode
}

export const Badge = ({
  body,
  variant,
  squareBorder = true,
  icon,
  ...props
}: BadgeProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  switch (variant) {
    case 'outlined':
      return (
        <HorizontalStack
          borderRadius={squareBorder ? borders.radius.medium : borders.radius.large}
          borderColor={colors.outline}
          borderWidth={borders.width.base}
          borderStyle='solid'
          py={spacing.space_2}
          px={spacing.space_3}
          justifyContent='center'
          {...props}
        >
          <Text variant='bodyXs' fontWeight='semibold' textColor={colors.outline}>
            {body}
          </Text>
        </HorizontalStack>
      )
    case 'contained':
      return (
        <HorizontalStack
          borderRadius={squareBorder ? borders.radius.medium : borders.radius.large}
          borderColor={colors.card_border}
          bg={colors.card_background}
          borderWidth={borders.width.base}
          borderStyle='solid'
          py={spacing.space_2}
          px={spacing.space_3}
          justifyContent='center'
          {...props}
        >
          <Text variant='bodyXs' fontWeight='semibold' color='primary'>
            {body}
          </Text>
        </HorizontalStack>
      )
    case 'flat':
      return (
        <HorizontalStack
          py={spacing.space_1}
          px={spacing.space_3}
          justifyContent='center'
          alignItems='center'
          {...props}
        >
          {icon && (
            <HorizontalStack width={spacing.space_3} mr={spacing.space_2} alignItems='center'>
              {icon}
            </HorizontalStack>
          )}
          <Text variant='bodyXs' fontWeight='black' color='primary'>
            {body}
          </Text>
        </HorizontalStack>
      )
  }
}
