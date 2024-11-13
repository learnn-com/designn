import { AppShell, CircularButton, Tooltip, Button, defaultTheme } from '@learnn/designn'
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


export const PositionsWithButtons = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '10px', marginTop: '10px' }}>
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-left' variant='dark'>
        <Button variant='primary' label='top-left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top' variant='dark'>
        <Button variant='primary' label='top with long text' onPress={() => {}} />
      </Tooltip>

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-right' variant='dark'>
        <Button variant='primary' label='top-right' onPress={() => {}} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '10px', marginTop: '10px' }}>
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='left' variant='dark'>
        <Button variant='primary' label='left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='right' variant='dark'>
        <Button variant='primary' label='right' onPress={() => {}} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '10px', marginTop: '10px' }}>
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-left' variant='dark'>
        <Button variant='primary' label='bottom-left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom' variant='dark'>
        <Button variant='primary' label='bottom' onPress={() => {}} />
      </Tooltip>

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-right' variant='dark'>
        <Button variant='primary' label='bottom-right' onPress={() => {}} />
      </Tooltip>
    </div>
  </AppShell>,
)

Positions.storyName = 'With Different Positions with buttons'