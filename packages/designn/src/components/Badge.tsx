import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Text } from './Text'
import { useTheme } from 'styled-components'

type Variant = 'outlined' | 'contained'

export type BadgeProps = {
  body: string
  variant: Variant
  squareBorder?: boolean
}

export const Badge = ({
  body,
  variant,
  squareBorder,
  ...props
}: BadgeProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  switch (variant) {
    case 'outlined':
      return (
        <HorizontalStack
          {...props}
          borderRadius={squareBorder ? borders.radius.base : borders.radius.large}
          borderColor={colors.outline}
          borderWidth={borders.width.base}
          borderStyle='solid'
          py={spacing.space_1}
          px={spacing.space_3}
          justifyContent='center'
        >
          <Text variant='bodyXs' fontWeight='semibold' textColor={colors.outline}>
            {body}
          </Text>
        </HorizontalStack>
      )
    case 'contained':
      return (
        <HorizontalStack
          {...props}
          borderRadius={squareBorder ? borders.radius.base : borders.radius.large}
          borderColor={colors.edge}
          bg={colors.edge}
          borderWidth={borders.width.base}
          borderStyle='solid'
          py={spacing.space_1}
          px={spacing.space_3}
          justifyContent='center'
        >
          <Text variant='bodyXs' fontWeight='semibold' color='primary'>
            {body}
          </Text>
        </HorizontalStack>
      )
  }

}
