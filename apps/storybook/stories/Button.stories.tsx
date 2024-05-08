import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, Button, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const DEFAULT_TEXT = 'I am a button'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Button> = () => node
  return template.bind({})
}

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button variant='primary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='secondary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='tertiary' label={DEFAULT_TEXT} onPress={() => {}} />
    </div>
  </AppShell>,
)

Variants.storyName = 'With Hierarchy Variants'

export const Sizes = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button variant='primary' size='lg' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='primary' size='md' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button variant='primary' size='sm' label={DEFAULT_TEXT} onPress={() => {}} />
    </div>
  </AppShell>,
)

Sizes.storyName = 'With different sizes'

export const Disabled = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button variant='primary' label={DEFAULT_TEXT} onPress={() => {}} disabled />
      <Button variant='secondary' label={DEFAULT_TEXT} onPress={() => {}} disabled />
      <Button variant='tertiary' label={DEFAULT_TEXT} onPress={() => {}} disabled />
    </div>
  </AppShell>,
)

Disabled.storyName = 'Disabled buttons'

export const Loading = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button loading variant='primary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button loading variant='secondary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button loading variant='tertiary' label={DEFAULT_TEXT} onPress={() => {}} />
      <Button loading variant='primary' label={DEFAULT_TEXT} onPress={() => {}} icon={<FontAwesomeIcon icon={faClock} size='lg' color='black' />} iconPosition='left'/>
    </div>
  </AppShell>,
)

Loading.storyName = 'Loading buttons'

export const Borders = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
      <Button variant='primary' label={DEFAULT_TEXT} onPress={() => {}} squareBorder={false} />
      <Button variant='primary' label={DEFAULT_TEXT} onPress={() => {}} />
    </div>
  </AppShell>,
)

Borders.storyName = 'With different borders'
