import { AppShell, Box, FieldCheckboxMultiChoice, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/FieldCheckboxMultiChoice',
  component: FieldCheckboxMultiChoice,
} as ComponentMeta<typeof FieldCheckboxMultiChoice>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof FieldCheckboxMultiChoice> = () => node
  return template.bind({})
}

export const FieldCheckboxMultiChoiceStandard = bind(
  <AppShell theme={defaultTheme}>
    <FieldCheckboxMultiChoice
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
        { label: 'Option 4', value: 'option-4' },
      ]}
      value={[]}
    />
  </AppShell>,
)
FieldCheckboxMultiChoiceStandard.storyName = 'FieldCheckboxMultiChoice Standard'

export const FieldCheckboxMultiChoiceSomeSelected = bind(
  <AppShell theme={defaultTheme}>
    <FieldCheckboxMultiChoice
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
        { label: 'Option 4', value: 'option-4' },
      ]}
      value={['option-2', 'option-4']}
    />
  </AppShell>,
)
FieldCheckboxMultiChoiceSomeSelected.storyName = 'FieldCheckboxMultiChoice with some selections'

export const FieldCheckboxMultiChoiceLabelError = bind(
  <AppShell theme={defaultTheme}>
    <Box>
      <FieldCheckboxMultiChoice
        label='Label'
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
          { label: 'Option 4', value: 'option-4' },
        ]}
        value={['option-2', 'option-4']}
      />
    </Box>
    <Box mt={'10px'}>
      <FieldCheckboxMultiChoice
        error='This is an error'
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
          { label: 'Option 4', value: 'option-4' },
        ]}
        value={['option-2', 'option-4']}
      />
    </Box>
    <Box mt={'10px'}>
      <FieldCheckboxMultiChoice
        label='Label'
        error='This is an error'
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
          { label: 'Option 4', value: 'option-4' },
        ]}
        value={['option-2', 'option-4']}
      />
    </Box>
  </AppShell>,
)
FieldCheckboxMultiChoice.storyName = 'FieldCheckboxMultiChoice with label and error'
