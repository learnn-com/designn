import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Text } from './Text'
import { useTheme } from 'styled-components'
import { SpaceUnit } from '../theme/tokens/borders'

type Variant = 'outlined' | 'contained'

export type BedgeProps = {
  body: string
  variant: Variant
  borderRadius?: SpaceUnit
}

export const Bedge = ({
  body,
  variant,
  borderRadius,
  ...props
}: BedgeProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  switch (variant) {
    case 'outlined':
      return (
        <HorizontalStack
          {...props}
          borderRadius={borderRadius ?? borders.radius.large}
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
          borderRadius={borderRadius ?? borders.radius.large}
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
