import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Title } from './Title'
import { Text } from './Text'
import { VerticalStack } from './VerticalStack'
import { useTheme } from 'styled-components'
import { ReactNode, useState } from 'react'
import { CircularButton } from './CircularButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashAlt,
  faPencilAlt,
  faFloppyDisk,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons'
import { TextArea } from './TextArea'

export type EditableNoteProps = {
  title: string
  body: string
  variant?: 'full' | 'small'
  headerRight?: ReactNode
  onDeleteClick: () => void
  onEditClick: (newNoteValue: string) => Promise<void>
}

export const EditableNote = ({
  title,
  body,
  headerRight,
  onDeleteClick,
  onEditClick,
  variant = 'full',
  ...props
}: EditableNoteProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme()
  const [status, setStatus] = useState<'show' | 'edit'>('show')
  const [isLoading, setLoading] = useState(false)
  const [editInputText, setEditInputText] = useState('')

  switch (variant) {
    case 'full':
      return (
        <HorizontalStack
          {...props}
          borderRadius={borders.radius.large}
          bg={colors.card_background}
          borderStyle='solid'
          borderColor={colors.card_border}
          borderWidth={borders.width.base}
          p={spacing.space_8}
          justifyContent='center'
          flex={1}
        >
          <VerticalStack flex={1} mr={spacing.space_3}>
            <HorizontalStack justifyContent='space-between'>
              <Title variant='headingMd'>{title}</Title>
              <HorizontalStack>{headerRight}</HorizontalStack>
            </HorizontalStack>
            {status === 'show' ? (
              <Text
                variant='bodySm'
                fontWeight='light'
                lineHeightScale='3'
                color='secondary'
                mt={spacing.space_6}
              >
                {body}
              </Text>
            ) : (
              <TextArea
                mt={spacing.space_6}
                value={editInputText}
                rows={4}
                onChange={e => setEditInputText(e.target.value)}
              />
            )}
          </VerticalStack>
          {status === 'show' ? (
            <VerticalStack ml={spacing.space_3}>
              <CircularButton
                variant='flat'
                onPress={onDeleteClick}
                size='md'
                icon={<FontAwesomeIcon icon={faTrashAlt} />}
              />
              <CircularButton
                variant='flat'
                onPress={() => {
                  setEditInputText(body)
                  setStatus('edit')
                }}
                size='md'
                icon={<FontAwesomeIcon icon={faPencilAlt} />}
                mt={spacing.space_3}
              />
            </VerticalStack>
          ) : (
            <VerticalStack ml={spacing.space_3}>
              <CircularButton
                variant='flat'
                onPress={() => setStatus('show')}
                size='md'
                icon={<FontAwesomeIcon icon={faRotateLeft} />}
              />
              <CircularButton
                variant='flat'
                onPress={async () => {
                  if (isLoading) return
                  setLoading(true)
                  try {
                    await onEditClick(editInputText)
                    setStatus('show')
                  } catch (e) {}
                  setLoading(false)
                }}
                size='md'
                icon={<FontAwesomeIcon icon={faFloppyDisk} />}
                mt={spacing.space_3}
              />
            </VerticalStack>
          )}
        </HorizontalStack>
      )
    case 'small':
      return (
        <HorizontalStack
          {...props}
          borderRadius={borders.radius.large}
          bg={colors.card_background}
          borderStyle='solid'
          borderColor={colors.card_border}
          borderWidth={borders.width.base}
          p={spacing.space_8}
          justifyContent='center'
          flex={1}
        >
          <VerticalStack flex={1}>
            <HorizontalStack justifyContent='space-between' alignItems='center'>
              <Title variant='headingSm'>{title}</Title>
              <HorizontalStack>{headerRight}</HorizontalStack>
              {status === 'show' ? (
                <HorizontalStack alignItems='center'>
                  <CircularButton
                    variant='flat'
                    onPress={onDeleteClick}
                    size='sm'
                    mr={spacing.space_2}
                    icon={<FontAwesomeIcon icon={faTrashAlt} />}
                  />
                  <CircularButton
                    variant='flat'
                    onPress={() => {
                      setEditInputText(body)
                      setStatus('edit')
                    }}
                    size='sm'
                    icon={<FontAwesomeIcon icon={faPencilAlt} />}
                  />
                </HorizontalStack>
              ) : (
                <HorizontalStack alignItems='center'>
                  <CircularButton
                    variant='flat'
                    onPress={() => setStatus('show')}
                    size='sm'
                    mr={spacing.space_2}
                    icon={<FontAwesomeIcon icon={faRotateLeft} />}
                  />
                  <CircularButton
                    variant='flat'
                    onPress={async () => {
                      if (isLoading) return
                      setLoading(true)
                      try {
                        await onEditClick(editInputText)
                        setStatus('show')
                      } catch (e) {}
                      setLoading(false)
                    }}
                    size='sm'
                    icon={<FontAwesomeIcon icon={faFloppyDisk} />}
                  />
                </HorizontalStack>
              )}
            </HorizontalStack>
            {status === 'show' ? (
              <Text
                variant='bodySm'
                fontWeight='regular'
                color='secondary'
                mt={spacing.space_6}
                lineHeightScale='3'
              >
                {body}
              </Text>
            ) : (
              <TextArea
                mt={spacing.space_6}
                value={editInputText}
                rows={4}
                onChange={e => setEditInputText(e.target.value)}
              />
            )}
          </VerticalStack>
        </HorizontalStack>
      )
  }
}
