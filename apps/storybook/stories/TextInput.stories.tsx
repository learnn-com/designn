import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, TextInput, VerticalStack, defaultTheme } from '@learnn/designn'
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

export const TextInputSize = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack>
    <TextInput placeholder='Small size' size='sm' mt='20px'/>
    <TextInput placeholder='Medium size' size='md' mt='20px'/>
    <TextInput placeholder='Large size' size='lg' mt='20px'/>
    <TextInput placeholder='XLarge size' size='xl' mt='20px'/>
    </VerticalStack>
  </AppShell>,
)
TextInputSize.storyName = 'TextInput Different Sizes'

export const TextInputVariants = bind(
  <AppShell theme={defaultTheme}>
  <VerticalStack>
  <TextInput placeholder='Transparent' variant='transparent' mt='20px'/>
  <TextInput placeholder='Light' variant='light' mt='20px'/>
  <TextInput placeholder='Dark' variant='dark' mt='20px'/>
  <TextInput placeholder='Underlined' variant='underlined' mt='20px'/>
  </VerticalStack>
  </AppShell>,
)
TextInputVariants.storyName = 'TextInput Different Variants'

export const TextInputComponent = bind(
  <AppShell theme={defaultTheme}>
  <VerticalStack>
  <TextInput placeholder='Left Component' leftComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>}  mt='20px'/>
  <TextInput placeholder='Right Component' rightComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>}  mt='20px'/>
  <TextInput placeholder='Both Components' leftComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>} rightComponent={<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>}  mt='20px'/>
  </VerticalStack>
  </AppShell>,
)
TextInputComponent.storyName = 'TextInput Component Position'

export const TextInputLabelError = bind(
  <AppShell theme={defaultTheme}>
  <VerticalStack>
  <TextInput placeholder='With label' label='Label' mt='20px'/>
  <TextInput placeholder='With error' error='This is an error' mt='20px'/>
  <TextInput placeholder='With both' label='Label' error='This is an error' mt='20px'/>
  </VerticalStack>
  </AppShell>,
)
TextInputLabelError.storyName = 'TextInput with label and error'
