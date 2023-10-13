import { AppShell, TextArea, defaultTheme } from '@learnn/designn'
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
