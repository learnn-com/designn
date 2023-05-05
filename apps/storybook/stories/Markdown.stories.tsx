import { AppShell, Markdown, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

const DEFAULT_TEXT = '**Provola**\n## Questo è un titolo\n\n![Automazioni con Google Apps Script.pdf](https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/Automazioni_con_Google_Apps_Script_05ee8932fe.pdf)'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Markdown> = () => node
  return template.bind({})
}

export const StandardMarkdown = bind(
  <AppShell theme={defaultTheme}>
    <Markdown>{DEFAULT_TEXT}</Markdown>
  </AppShell>,
)

StandardMarkdown.storyName = 'StandardMarkdown'