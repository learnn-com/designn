import { faBlog, faBookBookmark, faClock, faClockFour } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, Badge, HorizontalStack, PathCard, VerticalStack,Text, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/PathCard',
  component: PathCard,
} as ComponentMeta<typeof PathCard>


const COVER_IMAGE = 'https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/large_Screenshot_2023_09_20_at_3_15_00_pm_e1476b9c80.png'
const SUBTITLE = '99 Corsi • 33 Ore • 55 Verifiche'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof PathCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px', width: '250px' }}>
      <PathCard
        coverImage={COVER_IMAGE}
        subtitle={SUBTITLE}
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Path Card'

export const Medium = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '250px' }}>
      <PathCard
        coverImage={COVER_IMAGE}
        subtitle={SUBTITLE}
        size='md'
      />
    </div>
  </AppShell>,
)
Medium.storyName = 'Medium size Path Card'


export const Small = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '270px' }}>
      <PathCard
        coverImage={COVER_IMAGE}
        subtitle={SUBTITLE}
        size='sm'
      />
    </div>
  </AppShell>,
)
Small.storyName = 'Small size Path Card'

export const SmallWithComponent = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '250px' }}>
      <PathCard
        coverImage={COVER_IMAGE}
        subtitleComponent={
          <HorizontalStack alignItems='center'>
            <Badge body='component' variant='outlined' />
          </HorizontalStack>
        }
        size='sm'
      />
    </div>
  </AppShell>,
)
SmallWithComponent.storyName = 'Small size Path Card with subtitle component'
