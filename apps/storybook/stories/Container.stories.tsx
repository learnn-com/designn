import { AppShell, Container, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>


function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Container> = () => node
  return template.bind({})
}

export const ContainerStandard = bind(
  <AppShell theme={defaultTheme}>
      <Container>
        <div style={{width: '100%', height: '1500px', backgroundColor: 'red'}}></div>
      </Container>
  </AppShell>,
)
ContainerStandard.storyName = 'Standard container'
