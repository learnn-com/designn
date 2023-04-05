import { AppShell, createTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AppShell',
  component: AppShell,
} as ComponentMeta<typeof AppShell>

type AppShellArgs = { fontSize?: number }

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const Template: ComponentStory<typeof AppShell> = (args: AppShellArgs) => {
  const theme = createTheme({
    name: 'storybook',
    baseFontSize: args.fontSize,
  })
  return (
    <AppShell theme={theme}>
      <span className='brand'>{DEFAULT_TEXT}</span>
    </AppShell>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Default'
Default.args = {} as AppShellArgs

export const WithTheme = Template.bind({})
WithTheme.storyName = 'With theme'
WithTheme.args = {
  fontSize: 36,
} as AppShellArgs
