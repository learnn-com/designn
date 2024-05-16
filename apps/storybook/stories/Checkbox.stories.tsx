import { AppShell, Checkbox, Text, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Checkbox> = () => node
  return template.bind({})
}


export const CheckboxStandard = bind(
  <AppShell theme={defaultTheme}>
    <Checkbox label="Elemento" />
    <Checkbox checked label="Elemento" />
  </AppShell>,
)
CheckboxStandard.storyName = 'Checkbox Standard'
