import { AppShell, Box, TextArea, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof TextArea> = () => node
  return template.bind({})
}


export const TextAreaStandard = bind(
  <AppShell theme={defaultTheme}>
    <TextArea 
      placeholder='test' 
      rows={10}/>
  </AppShell>,
)
TextAreaStandard.storyName = 'TextArea Standard'

export const TextAreaLabelError = bind(
  <AppShell theme={defaultTheme}>
    <Box>
      <TextArea 
        label='Label'
        placeholder='test' 
        rows={10}/>
    </Box>
    <Box mt={'10px'}>
      <TextArea 
        error='This is an error'
        placeholder='test' 
        rows={10}/>
    </Box>
    <Box mt={'10px'}>
      <TextArea 
        label='Label'
        error='This is an error'
        placeholder='test' 
        rows={10}/>
    </Box>
    
  </AppShell>,
)
TextAreaLabelError.storyName = 'TextArea with label and error'
