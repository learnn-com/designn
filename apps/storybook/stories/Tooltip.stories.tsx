import { AppShell, CircularButton, Tooltip, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Tooltip> = () => node
  return template.bind({})
}

export const Positions = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='top-left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='top'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>

      <Tooltip label='This is a tooltip' position='top-right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='bottom-left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='bottom'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>

      <Tooltip label='This is a tooltip' position='bottom-right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
  </AppShell>,
)

Positions.storyName = 'With Different Positions'

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='bottom' variant='light'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      <Tooltip label='This is a tooltip' position='bottom' variant='dark'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
  </AppShell>,
)

Variants.storyName = 'With Different Variants'