import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Title } from './Title'
import { Text } from './Text'
import { VerticalStack } from './VerticalStack'
import { useTheme } from 'styled-components'
import { Box } from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export type AuthorCardProps = {
  authorName: string
  authorProfession: string
  authorImageSrc: string
  link?: string
}

export const AuthorCard = ({
  authorName,
  authorProfession,
  link,
  authorImageSrc,
  ...props
}: AuthorCardProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  return (
    <HorizontalStack
      {...props}
      borderRadius={borders.radius.large}
      bg={colors.edge}
      p={spacing.space_5}
      justifyContent='center'
    >
      <Box
        height={spacing.space_32}
        width={spacing.space_32}
        borderRadius={borders.radius.large}
        backgroundImage={'url('+authorImageSrc+')'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize='cover'
      ></Box>
      <VerticalStack
        flex={1}
        justifyContent='space-between'
        px={spacing.space_4}
        py={spacing.space_4}
        ml={spacing.space_4}
      >
        <VerticalStack>
          <Title variant='headingMd'>{authorName}</Title>
          <Text variant='bodySm' fontWeight='regular' color='secondary' mt={spacing.space_2}>
            {authorProfession}
          </Text>
        </VerticalStack>
        {link && (
          <HorizontalStack alignItems='center' justifyContent='flex-start'>
            <FontAwesomeIcon icon={faLink} size='xs' color='white' />
            <Text variant='bodyXs' fontWeight='light' color='secondary' ml={spacing.space_3}>
              {link}
            </Text>
          </HorizontalStack>
        )}
      </VerticalStack>
    </HorizontalStack>
  )
}
