import { AppShell, Box, FieldTagsInput, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/FieldTagsInput',
  component: FieldTagsInput,
} as ComponentMeta<typeof FieldTagsInput>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof FieldTagsInput> = () => node
  return template.bind({})
}


export const FieldTagsInputStandard = bind(
  <AppShell theme={defaultTheme}>
    <FieldTagsInput
      value={['Tag one', 'Tag two', 'Tag n']} 
    />
  </AppShell>,
)
FieldTagsInputStandard.storyName = 'FieldTagsInput Standard'

export const FieldTagsInputLabelError = bind(
  <AppShell theme={defaultTheme}>
    <Box>
      <FieldTagsInput
        label='Label'
        value={['Tag one', 'Tag two', 'Tag n']} 
      />
    </Box>
    <Box mt={'10px'}>
      <FieldTagsInput
        error='This is an error'
        value={['Tag one', 'Tag two', 'Tag n']} 
      />
    </Box>
    <Box mt={'10px'}>
      <FieldTagsInput
        label='Label'
        error='This is an error'
        value={['Tag one', 'Tag two', 'Tag n']} 
      />
    </Box>
    
  </AppShell>,
)
FieldTagsInputLabelError.storyName = 'FieldTagsInput with label and error'
