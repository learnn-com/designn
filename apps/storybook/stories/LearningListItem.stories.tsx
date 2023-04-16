import { AppShell, LearningListItem, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/LearningListItem',
  component: LearningListItem,
} as ComponentMeta<typeof LearningListItem>

const INDEX = '01'
const TITLE = 'Seamless come tecnica creativa'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof LearningListItem> = () => node
  return template.bind({})
}

export const FullWidth = bind(
  <AppShell theme={defaultTheme}>
    <LearningListItem index={INDEX} title={TITLE} />
  </AppShell>,
)
FullWidth.storyName = 'Learning List Item full width'

export const FixedWidth = bind(
  <AppShell theme={defaultTheme}>
    <LearningListItem index={INDEX} title={TITLE} width='220px' />
  </AppShell>,
)
FixedWidth.storyName = 'Learning List Item width fixed 220px'

export const ShortTitle = bind(
  <AppShell theme={defaultTheme}>
    <LearningListItem index={INDEX} title='Design' width='220px' />
  </AppShell>,
)
ShortTitle.storyName = 'Learning List Item with short title'
