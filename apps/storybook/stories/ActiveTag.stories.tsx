import { AppShell, ActiveTag, defaultTheme, HorizontalStack, aiPurpleTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ActiveTag',
  component: ActiveTag,
} as ComponentMeta<typeof ActiveTag>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ActiveTag> = () => node
  return template.bind({})
}

export const Delete = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack width='500px' bg='#121214' p='50px' alignItems='flex-start'>
      <ActiveTag
        body='UI'
        variant='delete'
        onClick={() => {
          console.log('deleted')
        }}
        mr='20px'
      />
      <ActiveTag
        body='Web Design'
        variant='delete'
        onClick={() => {
          console.log('deleted')
        }}
      />
    </HorizontalStack>
  </AppShell>,
)
Delete.storyName = 'Tag delete mode'

export const Select = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack width='500px' bg='#121214' p='50px' alignItems='flex-start'>
      <ActiveTag
        body='UI'
        variant='select'
        onClick={(selected: boolean) => {
          console.log(selected)
        }}
        mr='20px'
      />
      <ActiveTag
        body='Web Design'
        variant='select'
        onClick={(selected: boolean) => {
          console.log(selected)
        }}
        selected
      />
    </HorizontalStack>
  </AppShell>,
)
Select.storyName = 'Tag select mode'

export const SelectWithAITheme = bind(
  <AppShell theme={aiPurpleTheme}>
    <HorizontalStack width='500px' bg='#170C24' p='50px' alignItems='flex-start'>
      <ActiveTag
        body='UI'
        variant='select'
        purpleTheme
        onClick={(selected: boolean) => {
          console.log(selected)
        }}
        mr='20px'
      />
      <ActiveTag
        body='Web Design'
        variant='select'
        purpleTheme
        onClick={(selected: boolean) => {
          console.log(selected)
        }}
        selected
      />
    </HorizontalStack>
  </AppShell>,
)
SelectWithAITheme.storyName = 'Tag select mode with AI theme'
