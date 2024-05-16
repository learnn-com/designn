import { AppShell, ToggleSwitch, VerticalStack, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>


function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ToggleSwitch> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack>
      <ToggleSwitch 
        checked={false}
      />
      <ToggleSwitch 
        checked={true}
      />
    </VerticalStack>
  </AppShell>,
)
Standard.storyName = 'Standard ToggleSwitch'

export const WithLabel = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack>
      <ToggleSwitch 
        label='This is a switch'
        checked={false}
      />
      <ToggleSwitch 
        label='This is a switch'
        checked={true}
      />
    </VerticalStack>
  </AppShell>,
)
WithLabel.storyName = 'ToggleSwitch with label'
