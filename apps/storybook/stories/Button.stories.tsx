import { AppShell, Button, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const DEFAULT_TEXT = 'I am a button'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Button> = () => node
  return template.bind({})
}

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button variant='primary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='secondary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='tertiary' label={DEFAULT_TEXT} onPress={() => {}} />
    </div>
  </AppShell>,
)

Variants.storyName = 'With Hierarchy Variants'
