import { AppShell, VerifiedCard, defaultTheme, HorizontalStack } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import type { VerifiedProps } from '@learnn/designn'

export default {
  title: 'Components/VerifiedCard',
  component: VerifiedCard,
} as ComponentMeta<typeof VerifiedCard>

const mockVerifiedState: VerifiedProps = {
  courseTitle: 'Google Ads',
  attemptId: 'abc123-def456-ghi789',
  submittedAt: '2024-01-15T10:30:00Z',
  startedAt: '2024-01-15T10:00:00Z',
  ownerName: 'Luca Pirrone',
  courseDurationMinutes: 120,
  courseLessonsCount: 10,
}

const mockVerifiedStateWithMinutes: VerifiedProps = {
  courseTitle: 'Corso di Marketing Digitale Avanzato',
  attemptId: 'xyz789-abc123-def456',
  submittedAt: '2024-02-20T14:15:00Z',
  startedAt: '2024-02-20T14:15:00Z',
  ownerName: 'Luca Pirrone',
  courseDurationMinutes: 50,
  courseLessonsCount: 10,
}

const mockVerifiedStateLongTitle: VerifiedProps = {
  courseTitle: 'Google Ads: Creazione e Gestione di Campagne di Advertising',
  attemptId: 'very-long-attempt-id-123456789',
  submittedAt: '2024-03-10T09:45:00Z',
  startedAt: '2024-03-10T09:30:00Z',
  ownerName: 'Luca Pirrone',
  courseDurationMinutes: 120,
  courseLessonsCount: 10,
}

const mockVerifiedStateTwoLines: VerifiedProps = {
  courseTitle: 'Marketing Digitale Avanzato: Strategie e Tecniche per il Successo Online',
  attemptId: 'two-lines-title-123456',
  submittedAt: '2024-04-15T11:20:00Z',
  startedAt: '2024-04-15T11:00:00Z',
  ownerName: 'Luca Pirrone',
  courseDurationMinutes: 120,
  courseLessonsCount: 10,
}

const mockVerifiedStateShortTitle: VerifiedProps = {
  courseTitle: 'React',
  attemptId: 'short-title-789012',
  submittedAt: '2024-05-20T15:30:00Z',
  startedAt: '2024-05-20T15:15:00Z',
  ownerName: 'Luca Pirrone',
  courseDurationMinutes: 120,
  courseLessonsCount: 10,
}

const VERIFIED_IMAGE_URL =
  'https://my.learnn.com/assets/verified-WHrMjUfU.png'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof VerifiedCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <VerifiedCard verified={mockVerifiedState} verifiedImageUrl={VERIFIED_IMAGE_URL} verificationUrl="https://learnn.com/v/abc123-def456-ghi789" />
  </AppShell>,
)
Standard.storyName = 'Verified Card Standard'

export const LongTitle = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ width: '400px' }}>
      <VerifiedCard
        verified={mockVerifiedStateLongTitle}
        verifiedImageUrl={VERIFIED_IMAGE_URL}
        verificationUrl="https://learnn.com/v/abc123-def456-ghi789"
      />
    </div>
  </AppShell>,
)
LongTitle.storyName = 'Long Title (Truncated)'


export const CustomDateFormat = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ width: '400px' }}>
      <VerifiedCard
        verified={mockVerifiedState}
        verifiedImageUrl={VERIFIED_IMAGE_URL}
        verificationUrl="https://learnn.com/v/abc123-def456-ghi789"
        formatDate={(date: Date) =>
          date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }
      />
    </div>
  </AppShell>,
)
CustomDateFormat.storyName = 'Custom Date Format'

export const WithMinutesFormat = bind(
  <AppShell theme={defaultTheme}>
    <VerifiedCard
    verified={mockVerifiedStateWithMinutes}
    verifiedImageUrl={VERIFIED_IMAGE_URL}
    verificationUrl="https://learnn.com/v/abc123-def456-ghi789"
    />
  </AppShell>,
)
WithMinutesFormat.storyName = 'With Minutes Format'

export const TwoCardsHorizontal = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack gap="1.5rem">
      <div style={{ flex: 1 }}>
        <VerifiedCard
          verified={mockVerifiedStateTwoLines}
          verifiedImageUrl={VERIFIED_IMAGE_URL}
          verificationUrl="https://learnn.com/v/abc123-def456-ghi789"
        />
      </div>
      <div style={{ flex: 1 }}>
        <VerifiedCard
          verified={mockVerifiedStateShortTitle}
          verifiedImageUrl={VERIFIED_IMAGE_URL}
          verificationUrl="https://learnn.com/v/abc123-def456-ghi789"
        />
      </div>
    </HorizontalStack>
  </AppShell>,
)
TwoCardsHorizontal.storyName = 'Two Cards Horizontal (Two Lines vs One Word)'
