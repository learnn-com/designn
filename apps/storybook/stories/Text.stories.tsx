import { AppShell, Text, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const SHORT_TEXT = 'Lorem ipsum dolor sit amet'
const DEFAULT_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi, a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat. Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat. Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum. Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Text> = () => node
  return template.bind({})
}

export const Basic = bind(
  <AppShell theme={defaultTheme}>
    <Text variant='bodySm'>{DEFAULT_TEXT}</Text>
  </AppShell>,
)
Basic.storyName = 'A basic string of text'

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <Text variant='bodyXs'>{DEFAULT_TEXT}</Text>
    <Text variant='bodySm'>{DEFAULT_TEXT}</Text>
    <Text variant='bodyMd'>{DEFAULT_TEXT}</Text>
    <Text variant='bodyLg'>{DEFAULT_TEXT}</Text>
  </AppShell>,
)

Variants.storyName = 'With different size variants'

export const FontWeight = bind(
  <AppShell theme={defaultTheme}>
    <Text fontWeight='black'>{DEFAULT_TEXT}</Text>
    <Text fontWeight='bold'>{DEFAULT_TEXT}</Text>
    <Text fontWeight='semibold'>{DEFAULT_TEXT}</Text>
    <Text fontWeight='regular'>{DEFAULT_TEXT}</Text>
    <Text fontWeight='light'>{DEFAULT_TEXT}</Text>
  </AppShell>,
)

FontWeight.storyName = 'With different font weights'

export const Colors = bind(
  <AppShell theme={defaultTheme}>
    <Text>{DEFAULT_TEXT}</Text>
    <Text color='dimmed'>{DEFAULT_TEXT}</Text>
    <Text color='success'>{DEFAULT_TEXT}</Text>
    <Text color='error'>{DEFAULT_TEXT}</Text>
  </AppShell>,
)

Colors.storyName = 'With different colors'

export const WithAlign = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ border: '1px solid #707070' }}>
      <Text alignment='start'>
        <Text fontWeight='bold' inline>
          Left:
        </Text>{' '}
        {SHORT_TEXT}
      </Text>
      <br />
      <Text alignment='center'>
        <Text fontWeight='bold' inline>
          Center:
        </Text>{' '}
        {SHORT_TEXT}
      </Text>
      <br />
      <Text alignment='end'>
        <Text fontWeight='bold' inline>
          Right:
        </Text>{' '}
        {SHORT_TEXT}
      </Text>
    </div>
  </AppShell>,
)
WithAlign.storyName = 'With different alignments'

export const WithInline = bind(
  <AppShell theme={defaultTheme}>
    <span style={{ color: 'green' }}>LEFT##</span>
    <Text inline>{DEFAULT_TEXT}</Text>
    <span style={{ color: 'green' }}>##RIGHT</span>
  </AppShell>,
)
WithInline.storyName = 'With inline option'

export const WithTruncated = bind(
  <AppShell theme={defaultTheme}>
    <Text truncate>
      {DEFAULT_TEXT}
      {DEFAULT_TEXT}
      {DEFAULT_TEXT}
      {DEFAULT_TEXT}
      {DEFAULT_TEXT}
      {DEFAULT_TEXT}
    </Text>
  </AppShell>,
)
WithTruncated.storyName = 'With truncate option'
