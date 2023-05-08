import { AppShell, Markdown, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

const DEFAULT_TEXT = '**Provola**\n## Questo è un titolo\n\n![Automazioni con Google Apps Script.pdf](https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/Automazioni_con_Google_Apps_Script_05ee8932fe.pdf)'
const LINK_LIST_TEXT = "Di seguito le risorse del percorso Web 3.0:\n\n- [Scarica le Slide del Modulo 2](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Slide_Learnn_Blockchain_Binance_1_cec71e42a5.pdf)\n- [Scarica le Slide del Modulo 3](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Crypto_Fundamentals_4acf9c1343.pdf)\n- [Scarica le Slide dal Modulo 4 al Modulo 8](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Learnn_speech_Filippo_B_7e2bc91c74.pdf)\n- [Scarica le Slide dal Modulo 8 al Modulo 10](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Learnn_Luca_Boiardi_trading_07107c1657.pdf)\n"

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

export const LinkListMarkdown = bind(
  <AppShell theme={defaultTheme}>
    <Markdown>{LINK_LIST_TEXT}</Markdown>
  </AppShell>,
)

LinkListMarkdown.storyName = 'List of links'