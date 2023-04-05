import { Text } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const DEFAULT_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi, a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat. Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat. Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum. Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.'

const SHORT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Text> = () => node
  return template.bind({})
}

export const Basic = bind(<Text>{DEFAULT_TEXT}</Text>)
Basic.storyName = 'A basic string of text'

export const WithDifferentColors = bind(
  <>
    <Text disabled>{DEFAULT_TEXT}</Text>
    <Text muted>{DEFAULT_TEXT}</Text>
  </>,
)
WithDifferentColors.storyName = 'A string with different states: muted, disabled'

export const WithDifferentSizes = bind(
  <>
    <Text large>{DEFAULT_TEXT}</Text>
    <br />
    <Text>{DEFAULT_TEXT}</Text>
    <br />
    <Text small>{DEFAULT_TEXT}</Text>
    <br />
    <Text micro>{DEFAULT_TEXT}</Text>
  </>,
)
WithDifferentSizes.storyName = 'A string with different sizes: large, regular, small, micro'

export const WithInline = bind(
  <div style={{ border: '1px solid black' }}>
    <span style={{ color: 'green' }}>LEFT##</span>
    <Text inline>{DEFAULT_TEXT}</Text>
    <span style={{ color: 'blue' }}>##RIGHT</span>
  </div>,
)
WithInline.storyName = 'A string inline'

export const WithDifferentEmphasis = bind(
  <>
    <Text bold>{DEFAULT_TEXT}</Text>
    <br />
    <Text uppercased>{DEFAULT_TEXT}</Text>
    <br />
  </>,
)
WithDifferentEmphasis.storyName = 'A string with bold or uppercased emphasis'

export const WithWhitespacePreserved = bind(
  <>
    <Text> -white spaces not preserved- </Text>
    <br />
    <Text preserveWhitespace> -white spaces preserved- </Text>
  </>,
)
WithWhitespacePreserved.storyName = 'A string with whitespace preserved'

export const WithTruncated = bind(
  <Text truncated>
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
  </Text>,
)
WithTruncated.storyName = 'A string truncated'

export const WithNoWrap = bind(
  <Text noWrap>
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
    {DEFAULT_TEXT}
  </Text>,
)
WithNoWrap.storyName = 'A string with text no wrapped'

export const WithAlign = bind(
  <div style={{ border: '1px solid black', textAlign: 'center' }}>
    <Text>
      <Text bold>Parent alignment</Text> {SHORT_TEXT}
    </Text>
    <br />
    <Text align='center'>
      <Text bold>Center alignment</Text> {SHORT_TEXT}
    </Text>
    <br />
    <Text align='start'>
      <Text bold>Start alignment</Text> {SHORT_TEXT}
    </Text>
    <br />
    <Text align='end'>
      <Text bold>End alignment</Text> {SHORT_TEXT}
    </Text>
  </div>,
)
WithAlign.storyName = 'A string with aligned text'
