import { AppShell, Title, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Title> = () => node
  return template.bind({})
}

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <Title key={1} variant='heading2xl'>
      Text with heading2xl variant
    </Title>
    <Title key={2} variant='headingXl'>
      Text with headingXl variant
    </Title>
    <Title key={3} variant='headingLg'>
      Text with headingLg variant
    </Title>
    <Title key={4} variant='headingMd'>
      Text with headingMd variant
    </Title>
    <Title key={5} variant='headingSm'>
      Text with headingSm variant
    </Title>
    <Title key={6} variant='headingXs'>
      Text with headingXs variant
    </Title>
  </AppShell>,
)

export const FontWeight = bind(
  <AppShell theme={defaultTheme}>
    <Title key={1} variant='headingLg' fontWeight='black'>
      {DEFAULT_TEXT}
    </Title>
    <Title key={2} variant='headingLg' fontWeight='bold'>
      {DEFAULT_TEXT}
    </Title>
    <Title key={3} variant='headingLg' fontWeight='semibold'>
      {DEFAULT_TEXT}
    </Title>
    <Title key={4} variant='headingLg' fontWeight='regular'>
      {DEFAULT_TEXT}
    </Title>
  </AppShell>,
)

FontWeight.storyName = 'With Font Weight'
