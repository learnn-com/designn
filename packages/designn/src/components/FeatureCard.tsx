import {
  LayoutProps,
  SpaceProps
} from 'styled-system'
import { HorizontalStack } from './HorizontalStack';
import { Text } from './Text';
import { Title } from './Title';
import { VerticalStack } from './VerticalStack';
import { useTheme } from 'styled-components'


export type FeatureCardProps = {
  icon: JSX.Element
  title: string
  subtitle: string
};

export const FeatureCard = ({
  icon,
  title,
  subtitle,
  ...props
}: FeatureCardProps & SpaceProps & LayoutProps) => {
  const {borders, spacing, colors} = useTheme()

  return (
    <HorizontalStack
     {...props}
     borderRadius={borders.radius.large}
     bg={colors.feature_card_background}
     borderStyle="solid"
     borderColor={colors.feature_card_border}
     borderWidth={borders.width.base}
     px={spacing.space_4}
     py={spacing.space_5}
     justifyContent="center"
    >
      <HorizontalStack>
      <VerticalStack
        justifyContent="center">
        {icon}
        </VerticalStack>
        <VerticalStack
          ml={spacing.space_2}>
        <Title variant='headingXs' fontWeight='semibold'>{title}</Title>
        <Text variant='bodyXs' fontWeight='light'>{subtitle}</Text>
        </VerticalStack>
      </HorizontalStack>
    </HorizontalStack>
  )
}
