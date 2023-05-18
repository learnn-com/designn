import { AppShell, ProgressBar, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>


function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ProgressBar> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex' }}>
      <ProgressBar percentage={60} />
    </div>
  </AppShell>,
)
Standard.storyName = 'Progress Bar Standard'
