import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, Badge, CourseCard, defaultTheme } from '@learnn/designn'
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
        rightComponent={<Badge body='Pro' variant='contained' squareBorder={false} />}
      />
    </div>
  </AppShell>,
)
WithPRO.storyName = 'With PRO Badge'

export const MediumSize = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
        size='md'
      />
    </div>
  </AppShell>,
)
MediumSize.storyName = 'Medium size Course Card'


export const LiveContent = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
        size='md'
        rightComponent={<Badge
          body='Live'
          icon={<FontAwesomeIcon icon={faCircle} color='red' style={{ width: '100%' }} />}
          variant='contained'
          squareBorder={false}
        />}
      />
    </div>
  </AppShell>,
)
LiveContent.storyName = 'Medium size Course Card for live content'

export const LiveContentPro = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '200px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
        size='md'
        rightComponent={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Badge
            body='Pro'
            variant='contained'
            squareBorder={false}
          />
          <Badge
            body='Live'
            icon={<FontAwesomeIcon icon={faCircle} color='red' style={{ width: '100%' }} />}
            variant='contained'
            squareBorder={false}
          />
        </div>}
      />
    </div>
  </AppShell>,
)
LiveContentPro.storyName = 'Medium size Course Card for live content and pro'

