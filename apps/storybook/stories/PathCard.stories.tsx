import { AppShell, Badge, HorizontalStack, PathCard, Text, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/PathCard',
  component: PathCard,
} as ComponentMeta<typeof PathCard>

const COVER_IMAGE =
  'https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/large_Screenshot_2023_09_20_at_3_15_00_pm_e1476b9c80.png'
const SUBTITLE = '99 Corsi • 33 Ore'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof PathCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px', width: '270px' }}>
      <PathCard coverImage={COVER_IMAGE} subtitle={SUBTITLE} />
    </div>
  </AppShell>,
)
Standard.storyName = 'Path Card'

export const Medium = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '270px' }}>
      <PathCard coverImage={COVER_IMAGE} subtitle={SUBTITLE} size='md' />
    </div>
  </AppShell>,
)
Medium.storyName = 'Medium size Path Card'

export const Small = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '270px' }}>
      <PathCard coverImage={COVER_IMAGE} subtitle={SUBTITLE} size='sm' />
    </div>
  </AppShell>,
)
Small.storyName = 'Small size Path Card'

export const SmallWithComponent = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '270px' }}>
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

export const SmallWithTopComponent = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px', width: '270px' }}>
      <PathCard
        coverImage={COVER_IMAGE}
        topComponent={
          <HorizontalStack alignItems='center' justifyContent='flex-end' width='100%'>
            <Badge body='component' variant='outlined' />
          </HorizontalStack>
        }
        subtitleComponent={
          <Text variant='bodyXs' fontWeight='bold'>
            {SUBTITLE}
          </Text>
        }
        size='sm'
      />
    </div>
  </AppShell>,
)
SmallWithTopComponent.storyName = 'Path Card with top component'
