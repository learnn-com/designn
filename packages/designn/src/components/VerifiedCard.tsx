import { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { SpaceProps, LayoutProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'

export interface VerifiedProps {
  courseTitle: string
  attemptId: string
  submittedAt: string
  startedAt: string
  ownerName: string
  courseDurationMinutes: number
  courseLessonsCount: number
}

export interface VerifiedCardProps extends SpaceProps, LayoutProps {
  verified: VerifiedProps
  verifiedImageUrl: string
  verificationUrl: string
  formatDate?: (date: Date) => string
  className?: string
}

const defaultFormatDate = (date: Date): string => {
  return date.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const VerifiedCard: FC<VerifiedCardProps> = ({
  verified,
  verifiedImageUrl,
  verificationUrl,
  formatDate = defaultFormatDate,
  className,
  ...props
}) => {
  useTheme()
  const formattedDate = formatDate(new Date(Date.parse(verified.submittedAt)))

  const formattedCourseDuration = () => {
    if (verified.courseDurationMinutes > 60) {
      return `${Math.floor(verified.courseDurationMinutes / 60)} ore`
    } else {
      return `${verified.courseDurationMinutes} minuti`
    }
  }

  return (
    <StyledCard
      href={verificationUrl}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
      {...props}
    >
      <CardInner>
        <ImageContainer>
          <ImageCover src={verifiedImageUrl} alt='Verified' />
        </ImageContainer>
        <InfoContainer>
          <VerifiedTitle
            variant='heading3xl'
            alignment='center'
            truncate
            truncateLines={2}
            color='primary'
          >
            {verified.courseTitle}
          </VerifiedTitle>
          <VerifiedOwnerName variant='bodyMd' color='primary' fontWeight='semibold' alignment='center'>
            <strong>{verified.ownerName}</strong> ha superato con successo il test finale del corso.
          </VerifiedOwnerName>
          <HorizontalStack width='100%'>
            <DateContainer>
              <DateLabel>DATA VERIFICA</DateLabel>
              <DateValue>{formattedDate}</DateValue>
            </DateContainer>
            <DateContainer>
              <DateLabel>DURATA CORSO</DateLabel>
              <DateValue>
                {formattedCourseDuration()}, {verified.courseLessonsCount} lezioni
              </DateValue>
            </DateContainer>
          </HorizontalStack>
          <VerifiedId>
            <strong>ID VERIFICA:</strong> {verified.attemptId}
          </VerifiedId>
        </InfoContainer>
      </CardInner>
    </StyledCard>
  )
}

const StyledCard = styled.a<SpaceProps & LayoutProps>`
  container-type: inline-size;
  background-color: ${p => p.theme.colors.verified_card_background};
  border-radius: ${p => p.theme.borders.radius.large};
  margin-top: 3.33cqw; /* 1.25rem = 20px, 20/600*100 = 3.33cqw */
  overflow: hidden;
  position: relative;
  border: ${p => p.theme.borders.width.medium} solid ${p => p.theme.colors.text.primary};
  text-decoration: none;
  display: flex;
  aspect-ratio: 1;
  width: 100%;
  max-width: 400px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`

const CardInner = styled.div`
  padding: 4cqw 4cqw 2cqw 4cqw; /* space_6: 1.5rem = 24px = 4cqw, space_3: 0.75rem = 12px = 2cqw */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const ImageContainer = styled.div`
  border-radius: 1.33cqw; /* 0.5rem = 8px, 8/600*100 = 1.33cqw */
  width: 20cqw; /* 120px = 20cqw */
  margin-bottom: 2.67cqw; /* 1rem = 16px, 16/600*100 = 2.67cqw */
  @container (max-width: 400px) {
    width: 22.5cqw; /* 90px = 22.5cqw (90/400*100 = 22.5cqw) */
  }
`

const ImageCover = styled.img`
  border-radius: 2cqw; /* 0.75rem = 12px, 12/600*100 = 2cqw */
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  margin-top: 2cqw;
`

const VerifiedTitle = styled(Title).attrs({
  variant: 'heading3xl',
})`
  font-size: 13cqw !important;
  line-height: 0.9em !important;
  letter-spacing: -0.05em;
  overflow: visible;
`

const VerifiedOwnerName = styled(Text).attrs({
  variant: 'bodyMd',
})`
  font-size: 5cqw !important; 
  line-height: 5cqw !important; 
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DateLabel = styled(Text).attrs({
  variant: 'bodySm',
  color: 'primary',
  fontWeight: 'bold',
  alignment: 'center',
})`
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-size: 3.5cqw;
  line-height: 4cqw;
`

const DateValue = styled(Text).attrs({
  variant: 'bodySm',
  color: 'primary',
  fontWeight: 'light',
  alignment: 'center',
})`
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  margin-top: 0.67cqw;
  font-size: 3.5cqw;
  line-height: 4cqw;
`

const VerifiedId = styled(Text).attrs({
  variant: 'bodyXxxs',
  color: 'primary',
  alignment: 'center',
})`
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 0.67cqw; /* 0.25rem = 4px, 4/600*100 = 0.67cqw */
  opacity: 0.6;
  word-wrap: break-word;

  strong {
    font-weight: ${p => p.theme.typography.font_weight_semibold};
  }

  @container (max-width: 400px) {
    font-size: 2.5cqw; /* 0.625rem = 10px, 10/400*100 = 2.5cqw */
  }
`
