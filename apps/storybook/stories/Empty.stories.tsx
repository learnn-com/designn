import { Empty } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = () => <Empty />

export const Nothing = Template.bind({})
Nothing.storyName = 'Empty'
