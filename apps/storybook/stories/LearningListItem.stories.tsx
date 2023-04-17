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

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex' }}>
      <LearningListItem index={INDEX} title={TITLE} />
    </div>
  </AppShell>,
)
Standard.storyName = 'Learning List Item'

export const ShortTitle = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex' }}>
      <LearningListItem index={INDEX} title='Design' />
    </div>
  </AppShell>,
)
ShortTitle.storyName = 'Learning List Item with short title'
