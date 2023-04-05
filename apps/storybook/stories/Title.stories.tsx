import { Title } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Title',
  component: Title
} as ComponentMeta<typeof Title>

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Title> = () => node
  return template.bind({})
}

export const DifferentLevel = bind(
  <>
    {[1, 2, 3].map((i) => (
      <Title key={i} level={i as 1 | 2 | 3}>
        {DEFAULT_TEXT}
      </Title>
    ))}
  </>
)
DifferentLevel.storyName = 'Titles with different heading levels'

export const DifferentColor = bind(
  <>
    <Title key={1} level={3} primary>
      {DEFAULT_TEXT}
    </Title>
    <Title key={2} level={3} muted>
      {DEFAULT_TEXT}
    </Title>
  </>
)
DifferentColor.storyName = 'Titles with different states: primary, muted'
