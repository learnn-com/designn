import { AppShell, Bedge, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Bedge',
  component: Bedge,
} as ComponentMeta<typeof Bedge>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Bedge> = () => node
  return template.bind({})
}

export const Outlined = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Bedge body='Categoria' variant='outlined' />
    </div>
  </AppShell>,
)
Outlined.storyName = 'Bedge outlined'

export const Contained = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Bedge body='Categoria' variant='contained' />
    </div>
  </AppShell>,
)
Contained.storyName = 'Bedge contained'

export const ContainedSquared = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Bedge body='Categoria' variant='contained' squareBorder />
    </div>
  </AppShell>,
)
Contained.storyName = 'Bedge contained more squared'

