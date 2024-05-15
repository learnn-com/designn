import { AppShell, Dropdown, VerticalStack, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const ITEMS = [
  { id: '1', label: 'Lorem ipsum 1' },
  { id: '2', label: 'Lorem ipsum 2' },
  { id: '3', label: 'Lorem ipsum 3' },
  { id: '4', label: 'Lorem ipsum 4' },
  { id: '5', label: 'Lorem ipsum 5' },
  { id: '6', label: 'Lorem ipsum 6' },
]

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Dropdown> = () => node
  return template.bind({})
}

export const Default = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px'>
      <Dropdown items={ITEMS} size='lg' variant='dark' selectedId='2' />
    </VerticalStack>
  </AppShell>,
)

Default.storyName = 'Default dropdown'
