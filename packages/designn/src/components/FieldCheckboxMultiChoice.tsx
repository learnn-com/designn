import { useTheme } from 'styled-components'
import { VerticalStack, Text, Checkbox, HorizontalStack, Box } from './'
import React, { FC } from 'react'

type FieldCheckboxMultiChoiceProps = {
  label?: string
  error?: string
  value: string[]
  options: { value: string; label: string }[]
  onChange: (options: string[]) => unknown
}
export const FieldCheckboxMultiChoice: FC<FieldCheckboxMultiChoiceProps> = ({
  label,
  error,
  options,
  value,
  onChange,
}) => {
  const { spacing, colors } = useTheme()

  return (
    <VerticalStack width={'100%'}>
      {label && (
        <Text variant='bodyXs' fontWeight='light'>
          {label}
        </Text>
      )}
      <HorizontalStack flexWrap='wrap' my={spacing.space_2} gap={spacing.space_1}>
        {options.map(item => (
          <Box mr={spacing.space_5} mb={spacing.space_6}>
            <Checkbox
              checked={value.some(x => x === item.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  onChange([...value, e.target.id])
                  console.log('add')
                } else {
                  onChange(value.filter(x => x !== e.target.id))
                  console.log('remove')
                }
              }}
              label={item.label}
              id={item.value}
            />
          </Box>
        ))}
      </HorizontalStack>
      {error && (
        <Box ml={spacing.space_1}>
          <Text variant='bodyXs' textColor={colors.text.error}>
            {error}
          </Text>
        </Box>
      )}
    </VerticalStack>
  )
}
