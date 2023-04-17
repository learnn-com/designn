import { AppShell, Badge, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Badge> = () => node
  return template.bind({})
}

export const Outlined = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Badge body='Categoria' variant='outlined' />
    </div>
  </AppShell>,
)
Outlined.storyName = 'Badge outlined'

export const Contained = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Badge body='Categoria' variant='contained' />
    </div>
  </AppShell>,
)
Contained.storyName = 'Badge contained'

export const ContainedSquared = bind(
  <AppShell theme={defaultTheme}>
  <div style={{ display: 'flex' }}>
    <Badge body='Categoria' variant='contained' squareBorder />
    </div>
  </AppShell>,
)
Contained.storyName = 'Badge contained more squared'

