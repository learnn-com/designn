import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, TextInput, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof TextInput> = () => node
  return template.bind({})
}

export const TextInputStandard = bind(
  <AppShell theme={defaultTheme}>
    <TextInput placeholder='Placeholder'/>
  </AppShell>,
)
TextInputStandard.storyName = 'TextInput Standard'

export const TextInputLeftComponent = bind(
  <AppShell theme={defaultTheme}>
    <TextInput leftComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>} />
  </AppShell>,
)
TextInputLeftComponent.storyName = 'TextInput Left Component'

export const TextInputRightComponent = bind(
  <AppShell theme={defaultTheme}>
    <TextInput rightComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>} />
  </AppShell>,
)
TextInputRightComponent.storyName = 'TextInput Right Component'

export const TextInputLeftRightComponent = bind(
  <AppShell theme={defaultTheme}>
    <TextInput leftComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>} rightComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>} />
  </AppShell>,
)
TextInputLeftRightComponent.storyName = 'TextInput Left Right Component'
