import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Title } from './Title'
import { Text } from './Text'
import { VerticalStack } from './VerticalStack'
import { useTheme } from 'styled-components'
import { ReactNode } from 'react'
import { CircularButton } from './CircularButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export type EditableNoteProps = {
  title: string
  body: string
  headerRight?: ReactNode
  onDeleteClick: () => void
  onEditClick: () => void
}

export const EditableNote = ({
  title,
  body,
  headerRight,
  onDeleteClick,
  onEditClick,
  ...props
}: EditableNoteProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()

  return (
    <HorizontalStack
      {...props}
      borderRadius={borders.radius.large}
      bg={colors.card_background}
      p={spacing.space_8}
      justifyContent='center'
    >
      <VerticalStack flex={1} mr={spacing.space_3}>
        <HorizontalStack justifyContent='space-between'>
          <Title variant='headingMd' fontWeight='bold'>
            {title}
          </Title>
          <HorizontalStack>{headerRight}</HorizontalStack>
        </HorizontalStack>
        <Text variant='bodySm' fontWeight='light' lineHeightScale='3' color='secondary' mt={spacing.space_6}>
          {body}
        </Text>
      </VerticalStack>
      <VerticalStack ml={spacing.space_3}>
        <CircularButton
          variant='flat'
          onPress={onDeleteClick}
          size='md'
          icon={<FontAwesomeIcon icon={faTrashAlt} />}
        />
        <CircularButton
          variant='flat'
          onPress={onEditClick}
          size='md'
          icon={<FontAwesomeIcon icon={faPencilAlt} />}
          mt={spacing.space_3}
        />
      </VerticalStack>
    </HorizontalStack>
  )
}
