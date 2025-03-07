import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { Title } from './Title'
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
import { Share } from '../icons/Share'
import { Markdown, Size } from './Markdown'

export type EditableNoteProps = {
  title: string
  body: string
  variant?: 'full' | 'small'
  headerRight?: ReactNode
  maxLinesToShow?: number
  onDeleteClick: () => void
  onShareClick?: () => void
  onEditClick: (newNoteValue: string) => Promise<void>
}

export const EditableNote = ({
  title,
  body,
  headerRight,
  maxLinesToShow,
  onDeleteClick,
  onEditClick,
  onShareClick,
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
              <Markdown
                size={'sm' as Size}    
                mt={spacing.space_6}
                color='secondary'
                maxLines={maxLinesToShow}
              >
                {body}
              </Markdown>
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
                onPress={() => {
                  setEditInputText(body)
                  setStatus('edit')
                }}
                size='md'
                icon={<FontAwesomeIcon icon={faPencilAlt} />}
              />
              {onShareClick ? (
                <CircularButton
                  variant='flat'
                  onPress={onShareClick}
                  size='md'
                  icon={<Share height={spacing.space_5} width={spacing.space_5} />}
                  mt={spacing.space_3}
                />
              ) : (
                <></>
              )}
              <CircularButton
                variant='flat'
                onPress={onDeleteClick}
                size='md'
                icon={<FontAwesomeIcon icon={faTrashAlt} />}
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
        <VerticalStack
          {...props}
          borderRadius={borders.radius.large}
          bg={colors.card_background}
          borderStyle='solid'
          borderColor={colors.card_border}
          borderWidth={borders.width.base}
          p={spacing.space_6}
          justifyContent='space-betwen'
          flex={1}
        >
          {status === 'show' ? (
            <Markdown
              size={'sm' as Size}    
              color='secondary'
              maxLines={maxLinesToShow}
            >
              {body}
            </Markdown>
          ) : (
            <TextArea
              mb={spacing.space_6}
              value={editInputText}
              rows={4}
              onChange={e => setEditInputText(e.target.value)}
            />
          )}

          {status === 'show' ? (
            <HorizontalStack alignItems='center' justifyContent='flex-end'>
              <CircularButton
                variant='flat'
                onPress={() => {
                  setEditInputText(body)
                  setStatus('edit')
                }}
                size='sm'
                mr={spacing.space_2}
                icon={<FontAwesomeIcon icon={faPencilAlt} />}
              />
              {onShareClick ? (
                <CircularButton
                  variant='flat'
                  onPress={onShareClick}
                  size='sm'
                  mr={spacing.space_2}
                  icon={<Share height={spacing.space_3} width={spacing.space_3} />}
                />
              ) : (
                <></>
              )}
              <CircularButton
                variant='flat'
                onPress={onDeleteClick}
                size='sm'
                icon={<FontAwesomeIcon icon={faTrashAlt} />}
              />
            </HorizontalStack>
          ) : (
            <HorizontalStack alignItems='center' justifyContent='flex-end'>
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
        </VerticalStack>
      )
  }
}
