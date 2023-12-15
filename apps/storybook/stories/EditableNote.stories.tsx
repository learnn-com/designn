import { AppShell, EditableNote, Badge, defaultTheme, HorizontalStack } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faBlog } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/EditableNote',
  component: EditableNote,
} as ComponentMeta<typeof EditableNote>

const TITLE = 'La tecnica Seamless'
const BODY =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof EditableNote> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex' }}>
      <EditableNote
        title={TITLE}
        body={BODY}
        onShareClick={() => {}}
        onDeleteClick={() => {}}
        onEditClick={() => {
          return new Promise(resolve => {
            setTimeout(() => resolve(), 1000)
          })
        }}
        headerRight={
          <HorizontalStack>
            <Badge
              icon={<FontAwesomeIcon icon={faClockFour} style={{ width: '100%' }} color='white' />}
              body={'26/06/2000'}
              variant='flat'
            />
            <Badge
              icon={<FontAwesomeIcon icon={faBlog} style={{ width: '100%' }} color='white' />}
              body={'1 Modulo'}
              variant='flat'
            />
          </HorizontalStack>
        }
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Editable Note Card'

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', marginBottom: '3rem' }}>
      <EditableNote
        title={'Full variant'}
        body={BODY}
        onDeleteClick={() => {}}
        onShareClick={() => {}}
        onEditClick={() => {
          return new Promise(resolve => {
            setTimeout(() => resolve(), 1000)
          })
        }}
        headerRight={
          <HorizontalStack>
            <Badge
              icon={<FontAwesomeIcon icon={faClockFour} style={{ width: '100%' }} color='white' />}
              body={'26/06/2000'}
              variant='flat'
            />
            <Badge
              icon={<FontAwesomeIcon icon={faBlog} style={{ width: '100%' }} color='white' />}
              body={'1 Modulo'}
              variant='flat'
            />
          </HorizontalStack>
        }
      />
    </div>
    <div style={{ display: 'flex', width: 500 }}>
      <EditableNote
        variant='small'
        title={'Small variant'}
        body={BODY}
        onShareClick={() => {}}
        onDeleteClick={() => {}}
        onEditClick={() => {
          return new Promise(resolve => {
            setTimeout(() => resolve(), 1000)
          })
        }}
      />
    </div>
  </AppShell>,
)
Variants.storyName = 'With size variants'
