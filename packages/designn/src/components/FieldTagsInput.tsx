import { Button, HorizontalStack, TextInput, Text, VerticalStack, Box, ActiveTag } from './'
import { FC, useState } from 'react'
import { useTheme } from 'styled-components'

type FieldTagsInputProps = {
  label?: string
  error?: string
  value: string[]
  maxItems?: number
  onChange: (value: string[]) => unknown
}
export const FieldTagsInput: FC<FieldTagsInputProps> = ({
  label,
  error,
  value,
  maxItems,
  onChange,
}) => {
  const { spacing, colors } = useTheme()
  const [inputVal, setInputVal] = useState('')

  const handleAddTag = () => {
    if (inputVal && (!maxItems || value.length < maxItems)) {
      onChange([...value, inputVal])
      setInputVal('')
    }
  }

  return (
    <VerticalStack width={'100%'}>
      {label && (
        <Box mb={spacing.space_2}>
          <Text variant='bodyXs' fontWeight='light'>
            {label}
          </Text>
        </Box>
      )}
      <HorizontalStack
        alignItems='center'
        flexDirection={{ _: 'column', small: 'row' }}
        gap={spacing.space_4}
      >
        <TextInput
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder={'Design'}
          size='lg'
          maxWidth={{ _: '100%', small: '300px' }}
          height={'100%'}
          variant='dark'
          onKeyDown={e => {
            if (e.key === 'Enter' && inputVal) handleAddTag()
          }}
        />
        <Button
          variant='primary'
          size='md'
          label='Aggiungi'
          disabled={inputVal === '' || (maxItems && value.length >= maxItems ? true : false)}
          onPress={() => {
            if (inputVal) handleAddTag()
          }}
        />
      </HorizontalStack>
      {error && (
        <Box mt={spacing.space_2}>
          <Text variant='bodyXs' textColor={colors.text.error}>
            {error}
          </Text>
        </Box>
      )}
      <HorizontalStack flexWrap='wrap' mt={spacing.space_4}>
        {value.map(val => (
          <ActiveTag
            body={val}
            variant='delete'
            mr={spacing.space_3}
            mb={spacing.space_2}
            onClick={() => {
              onChange(value.filter(x => x !== val))
            }}
          />
        ))}
      </HorizontalStack>
    </VerticalStack>
  )
}
