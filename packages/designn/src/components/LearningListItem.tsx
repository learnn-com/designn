import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Title } from './Title'
import { VerticalStack } from './VerticalStack'
import { useTheme } from 'styled-components'

export type LearningListItemProps = {
  title: string
  index: string
}

export const LearningListItem = ({
  title,
  index,
  ...props
}: LearningListItemProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  return (
    <HorizontalStack
      {...props}
      borderRadius={borders.radius.large}
      bg={colors.bg_app}
      borderStyle='solid'
      borderColor={colors.edge}
      borderWidth={borders.width.base}
      p={spacing.space_5}
      justifyContent='center'
    >
      <VerticalStack justifyContent='flex-start' width='100%'>
        <HorizontalStack
          borderRadius={spacing.space_10}
          bg={colors.edge}
          width={spacing.space_10}
          height={spacing.space_10}
          justifyContent='center'
          alignItems='center'
          mb={spacing.space_4}
        >
          <Title variant='headingXs' fontWeight='semibold'>
            {index}
          </Title>
        </HorizontalStack>
        <Title variant='headingXs' fontWeight='bold'>
          {title}
        </Title>
      </VerticalStack>
    </HorizontalStack>
  )
}
