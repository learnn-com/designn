import { AppShell, FeatureCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/FeatureCard',
  component: Text,
} as ComponentMeta<typeof Text>

const TITLE = '49 Lezioni'
const SUBTITLE =
  'da 5-10 minuti'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Text> = () => node
  return template.bind({})
}

export const Basic = bind(
  <AppShell theme={defaultTheme}>
    <FeatureCard icon={<></>} title={TITLE} subtitle={SUBTITLE}/>
  </AppShell>,
)
Basic.storyName = 'A basic string of text'
