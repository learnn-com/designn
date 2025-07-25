import { AppShell, Box, TextArea, aiPurpleTheme, defaultTheme } from '@learnn/designn'
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
    <TextArea placeholder='test' rows={10} />
  </AppShell>,
)
TextAreaStandard.storyName = 'TextArea Standard'

export const TextAreaVariants = bind(
  <AppShell theme={defaultTheme}>
    <Box>
      <TextArea placeholder='test' rows={10} />
    </Box>
    <Box mt={'10px'}>
      <TextArea variant='dark' placeholder='test' rows={10} />
    </Box>
    <Box mt={'10px'}>
      <TextArea variant='light' placeholder='test' rows={10} />
    </Box>
  </AppShell>,
)
TextAreaVariants.storyName = 'TextArea with variants'

export const TextAreaLabelError = bind(
  <AppShell theme={defaultTheme}>
    <Box>
      <TextArea label='Label' placeholder='test' rows={10} />
    </Box>
    <Box mt={'10px'}>
      <TextArea error='This is an error' placeholder='test' rows={10} />
    </Box>
    <Box mt={'10px'}>
      <TextArea label='Label' error='This is an error' placeholder='test' rows={10} />
    </Box>
  </AppShell>,
)
TextAreaLabelError.storyName = 'TextArea with label and error'


export const TextAreaAiTheme = bind(
  <AppShell theme={aiPurpleTheme}>
    <TextArea placeholder='this is a placeholder' rows={10} variant='light' />
  </AppShell>,
)

TextAreaAiTheme.storyName = 'TextArea with AI theme'