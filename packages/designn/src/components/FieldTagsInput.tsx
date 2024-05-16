import { Button, HorizontalStack, TextInput, Text, VerticalStack, Box } from "./"
import { FC, useState } from "react"
import { useTheme } from "styled-components"

type FieldTagsInputProps = {
    label?: string
    error?: string
    value: string[]
    maxItems?: number
    onChange: (value: string[]) => unknown
}
export const FieldTagsInput: FC<FieldTagsInputProps> = ({ label, error, value, maxItems, onChange }) => {
    const { spacing, borders, colors } = useTheme()
    const [inputVal, setInputVal] = useState('')

    const handleAddTag = () => {
        if (inputVal && (!maxItems || value.length < maxItems)) {
            onChange([...value, inputVal])
            setInputVal('')
        }
    }

    return (
        <VerticalStack width={'100%'}>
            {label && (<Box mb={spacing.space_2}><Text variant='bodyXs' fontWeight='light'>{label}</Text></Box>)}
            <HorizontalStack alignItems='center'>
                <TextInput
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    placeholder={'Design'}
                    size='lg'
                    width={'300px'}
                    height={'100%'}
                    variant='dark'
                    onKeyDown={e => {
                        if (e.key === 'Enter' && inputVal)
                            handleAddTag()
                    }}
                />
                <Button
                    ml={spacing.space_4}
                    variant='primary'
                    size='md'
                    label='Aggiungi'
                    disabled={inputVal === '' || (maxItems && value.length >= maxItems ? true : false)}
                    onPress={() => {
                        if (inputVal)
                            handleAddTag()
                    }}
                />
            </HorizontalStack>
            {error && (<Box mt={spacing.space_2}><Text variant='bodyXs' textColor={colors.text.error}>{error}</Text></Box>)}
            <HorizontalStack flexWrap='wrap' mt={spacing.space_2}>

                {
                    value.map(val => (
                        <HorizontalStack
                            borderRadius={borders.radius.full}
                            borderColor={colors.interaction_outline.secondary_active}
                            borderWidth={borders.width.base}
                            backgroundColor={colors.interaction_background.secondary_active}
                            borderStyle='solid'
                            py={spacing.space_2}
                            px={spacing.space_3}
                            mr={spacing.space_3}
                            cursor='pointer'
                            onClick={() => {
                                onChange(value.filter(x => x !== val))
                            }}
                        >
                            <Text variant='bodyXs' mr={spacing.space_2}>{val}</Text>
                        </HorizontalStack>
                    ))
                }

            </HorizontalStack>
        </VerticalStack>
    )

}