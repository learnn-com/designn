import { AppShell, CourseCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CourseCard',
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>

const TITLE = 'Nome del Corso molto lungo asda e e e '
const SUBTITLE = 'Corso • 3h 40min'
const PROGRESS = 40
const COVER_IMAGE = 'https://stack-vod-learnn-source-9043g70p82tj.s3.eu-west-3.amazonaws.com/medium_i_copywriting_cover_02_5f720857ac.jpg'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof CourseCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Course Card'

export const WithoutSubtitle = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard
        title={TITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
      />
    </div>
  </AppShell>,
)
WithoutSubtitle.storyName = 'Without Subtitle'

export const WithoutProgress = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
      />
    </div>
  </AppShell>,
)
WithoutProgress.storyName = 'Without Progress'

