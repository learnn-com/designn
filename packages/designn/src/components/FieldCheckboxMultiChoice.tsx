import { useTheme } from "styled-components"
import { VerticalStack, Text, Checkbox, HorizontalStack, Box } from "./"
import React, { FC } from "react"

type FieldCheckboxMultiChoiceProps = {
    label?: string
    error?: string
    value: string[]
    options: { value: string, label: string }[]
    onChange: (options: string[]) => unknown
}
export const FieldCheckboxMultiChoice: FC<FieldCheckboxMultiChoiceProps> = ({ label, error, options, value, onChange }) => {
    const { spacing, colors } = useTheme()

    return (
        <VerticalStack width={'100%'}>
            { label && (<Text variant='bodyXs' fontWeight='light'>{label}</Text>) }
            <HorizontalStack flexWrap='wrap' my={spacing.space_2} gap={spacing.space_1}>
                {
                    options.map((item) => (
                        <Box mr={spacing.space_5}>
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
                    ))
                }
            </HorizontalStack>
            {error && (<Text variant='bodyXs' textColor={colors.text.error}>{error}</Text>)}
        </VerticalStack>
    )
}