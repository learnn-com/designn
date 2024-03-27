import { AppShell, Badge, HorizontalScroll, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/HorizontalScroll',
  component: HorizontalScroll,
} as ComponentMeta<typeof HorizontalScroll>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof HorizontalScroll> = () => node
  return template.bind({})
}

export const HorizontalScrollStandard = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalScroll gapScale='3' width='500px'>
      <Badge body='Growth' variant='outlined' />
      <Badge body='Funnel' variant='outlined' />
      <Badge body='Ads' variant='outlined' />
      <Badge body='Programmazione' variant='outlined' />
      <Badge body='Social' variant='outlined' />
      <Badge body='Comunicazione' variant='outlined' />
      <Badge body='Dati' variant='outlined' />
      <Badge body='E-Commerce' variant='outlined' />
      <Badge body='B2B' variant='outlined' />
      <Badge body='Startup' variant='outlined' />
      <Badge body='Growth' variant='outlined' />
      <Badge body='Prodotto' variant='outlined' />
      <Badge body='Validazione' variant='outlined' />
      <Badge body='Mindset' variant='outlined' />
    </HorizontalScroll>
  </AppShell>,
)
HorizontalScroll.storyName = 'HorizontalScroll Standard'

export const HorizontalScrollCustomShadow = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalScroll gapScale='3' width='500px' shadowColor={defaultTheme.colors.border}>
      <Badge body='Growth' variant='outlined' />
      <Badge body='Funnel' variant='outlined' />
      <Badge body='Ads' variant='outlined' />
      <Badge body='Programmazione' variant='outlined' />
      <Badge body='Social' variant='outlined' />
      <Badge body='Comunicazione' variant='outlined' />
      <Badge body='Dati' variant='outlined' />
      <Badge body='E-Commerce' variant='outlined' />
      <Badge body='B2B' variant='outlined' />
      <Badge body='Startup' variant='outlined' />
    </HorizontalScroll>
  </AppShell>,
)
HorizontalScrollCustomShadow.storyName = 'HorizontalScroll Custom Shadow Color'
