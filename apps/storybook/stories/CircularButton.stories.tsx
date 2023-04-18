import { AppShell, CircularButton, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/CircularButton',
  component: CircularButton,
} as ComponentMeta<typeof CircularButton>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof CircularButton> = () => node
  return template.bind({})
}

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <CircularButton variant='primary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='tertiary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='flat' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
    </div>
  </AppShell>,
)

Variants.storyName = 'With Hierarchy Variants'

export const Sizes = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <CircularButton variant='primary' size='lg' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='primary' size='md' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='primary' size='sm' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
    </div>
  </AppShell>,
)

Sizes.storyName = 'With different sizes'

export const Disabled = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <CircularButton variant='primary' onPress={() => {}} disabled icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='secondary' onPress={() => {}} disabled icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='tertiary' onPress={() => {}} disabled icon={<FontAwesomeIcon icon={faPlay}/>} />
    </div>
  </AppShell>,
)

Disabled.storyName = 'Disabled CircularButtons'

export const Borders = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <CircularButton variant='primary' onPress={() => {}} squareBorder icon={<FontAwesomeIcon icon={faPlay}/>} />
      <CircularButton variant='primary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
    </div>
  </AppShell>,
)

Borders.storyName = 'With different borders'
