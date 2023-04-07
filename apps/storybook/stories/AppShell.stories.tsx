import { AppShell, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AppShell',
  component: AppShell,
} as ComponentMeta<typeof AppShell>

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const Template: ComponentStory<typeof AppShell> = () => {
  return (
    <AppShell theme={defaultTheme}>
      <span className='brand'>{DEFAULT_TEXT}</span>
    </AppShell>
  )
}

export const WithTheme = Template.bind({})
WithTheme.storyName = 'With theme'
