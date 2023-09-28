import { AppShell, CourseCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CourseCard',
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>

const TITLE = 'Nome del Corso molto lungo asda e e e '
const SUBTITLE = 'Corso • 3h 40min'
const PROGRESS = 40
const COVER_IMAGE = 'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_169_Cover_CORSI_new_54_086723cafa_88463e402d.png'
const COMPANY_LOGO = 'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/thumbnail_5_dfef551a2d.png'

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
        hideProgressBar
      />
    </div>
  </AppShell>,
)
WithoutProgress.storyName = 'Without Progress'

export const WithCompanyLogo = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        companyLogo={COMPANY_LOGO}
      />
    </div>
  </AppShell>,
)
WithCompanyLogo.storyName = 'With company logo'

export const WithPRO = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        pro
      />
    </div>
  </AppShell>,
)
WithPRO.storyName = 'With PRO Badge'

