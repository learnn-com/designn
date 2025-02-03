import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, Badge, CourseCard, defaultTheme, HorizontalStack, VerticalStack } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CourseCard',
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>

const TITLE = 'Facebook Ads Optimization: audit, ottimizzazione e strategie avanzate'
const SUBTITLE = 'Corso • 3h 40min'
const PROGRESS = 40
const COVER_IMAGE =
  'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_169_Cover_CORSI_new_54_086723cafa_88463e402d.png'
const DOUBLE_COVER_IMAGE =
  'https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/large_TESTING_copertina_def_55281447fa.jpg'
const COMPANY_LOGO =
  'https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/thumbnail_WEBAPP_Loghi_aziende_57_fccb6066c8.png'

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
        className='card-coming-content'
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Course Card'

export const WithoutSubtitle = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard title={TITLE} coverImage={COVER_IMAGE} progressPercentage={PROGRESS} />
    </div>
  </AppShell>,
)
WithoutSubtitle.storyName = 'Without Subtitle'

export const WithoutProgress = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <CourseCard title={TITLE} subtitle={SUBTITLE} coverImage={COVER_IMAGE} hideProgressBar />
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
        rightComponent={
          <Badge
            body='Live'
            icon={<FontAwesomeIcon icon={faCircle} color='red' style={{ width: '100%' }} />}
            variant='contained'
            squareBorder={false}
          />
        }
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
            <Badge body='Pro' variant='contained' squareBorder={false} />
            <Badge
              body='Live'
              icon={<FontAwesomeIcon icon={faCircle} color='red' style={{ width: '100%' }} />}
              variant='contained'
              squareBorder={false}
              className='live-badge'
            />
          </div>
        }
      />
    </div>
  </AppShell>,
)
LiveContentPro.storyName = 'Medium size Course Card for live content and pro'

export const CardWithNoVariant = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack gap='25px' style={{ width: '600px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
        size='md'
        companyLogo={COMPANY_LOGO}
      />
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={DOUBLE_COVER_IMAGE}
        progressPercentage={PROGRESS}
        size='md'
        companyLogo={COMPANY_LOGO}
        rightComponent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Badge body='Pro' variant='contained' squareBorder={false} />
          </div>
        }
      />
    </HorizontalStack>
  </AppShell>,
)
CardWithNoVariant.storyName = 'No variant course card stack'

export const LongTitle = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack gap='25px' style={{ width: '600px' }}>
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
        progressPercentage={PROGRESS}
        variant='longTitle'
        companyLogo={COMPANY_LOGO}
      />
      <CourseCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={DOUBLE_COVER_IMAGE}
        progressPercentage={PROGRESS}
        variant='longTitle'
        companyLogo={COMPANY_LOGO}
        rightComponent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Badge body='Pro' variant='contained' squareBorder={false} />
          </div>
        }
      />
    </HorizontalStack>
  </AppShell>,
)
LongTitle.storyName = 'LongTitle variant course card stack'

export const ShortCardWithBadges = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack gap='25px'>

      <HorizontalStack gap='25px' style={{ width: '220px' }}>
        <CourseCard
          title={TITLE}
          subtitle={SUBTITLE}
          coverImage={DOUBLE_COVER_IMAGE}
          progressPercentage={PROGRESS}
          variant='longTitle'
          companyLogo={COMPANY_LOGO}
          size='md'
          rightComponent={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Badge body='🚨 Rimozione' variant='contained' squareBorder={false}/>
            </div>
          }
          />
      </HorizontalStack>
      <HorizontalStack gap='25px' style={{ width: '300px' }}>
        <CourseCard
          title={TITLE}
          subtitle={SUBTITLE}
          coverImage={DOUBLE_COVER_IMAGE}
          progressPercentage={PROGRESS}
          variant='longTitle'
          companyLogo={COMPANY_LOGO}
          rightComponent={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Badge body='🚨 Rimozione aa' variant='contained' squareBorder={false} />
            </div>
          }
          />
      </HorizontalStack>
      <HorizontalStack gap='25px' style={{ width: '350px' }}>
        <CourseCard
          title={TITLE}
          subtitle={SUBTITLE}
          coverImage={DOUBLE_COVER_IMAGE}
          progressPercentage={PROGRESS}
          variant='longTitle'
          companyLogo={COMPANY_LOGO}
          rightComponent={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Badge body='🚨 Rimozione aa' variant='contained' squareBorder={false} />
            </div>
          }
          />
      </HorizontalStack>
    </VerticalStack>
  </AppShell>,
)
ShortCardWithBadges.storyName = 'Short card with badges'
