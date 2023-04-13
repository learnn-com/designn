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
    <Title variant='heading2xl'>Text with heading2xl variant</Title>
    <Title variant='headingXl'>Text with headingXl variant</Title>
    <Title variant='headingLg'>Text with headingLg variant</Title>
    <Title variant='headingMd'>Text with headingMd variant</Title>
    <Title variant='headingSm'>Text with headingSm variant</Title>
    <Title variant='headingXs'>Text with headingXs variant</Title>
  </AppShell>,
)

Variants.storyName = 'With Size Variants'

export const FontWeight = bind(
  <AppShell theme={defaultTheme}>
    <Title variant='headingLg' fontWeight='black'>
      {DEFAULT_TEXT}
    </Title>
    <Title variant='headingLg' fontWeight='bold'>
      {DEFAULT_TEXT}
    </Title>
    <Title variant='headingLg' fontWeight='semibold'>
      {DEFAULT_TEXT}
    </Title>
    <Title variant='headingLg' fontWeight='regular'>
      {DEFAULT_TEXT}
    </Title>
  </AppShell>,
)

FontWeight.storyName = 'With Font Weight'

export const Colors = bind(
  <AppShell theme={defaultTheme}>
    <Title variant='headingMd'>Heading with primary color</Title>
    <Title variant='headingMd' color='dimmed'>
      Heading with dimmed color
    </Title>
    <Title variant='headingMd' color='success'>
      Heading with success color
    </Title>
    <Title variant='headingMd' color='error'>
      Heading with error color
    </Title>
  </AppShell>,
)

Colors.storyName = 'With Colors'
