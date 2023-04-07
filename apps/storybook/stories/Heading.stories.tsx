import { AppShell, Heading } from '@learnn/designn'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const DEFAULT_TEXT = 'Titolo grande.'

export const Heading1 = () => (
  <AppShell>
  <Heading>{DEFAULT_TEXT}</Heading>
  </AppShell>
)
