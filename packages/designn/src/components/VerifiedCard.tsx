import { FC } from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { SpaceProps, LayoutProps } from 'styled-system'
import { useTheme } from 'styled-components'
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
          <Title
            variant='heading3xl'
            alignment='center'
            truncate
            truncateLines={2}
            color='primary'
            className='verified-title'
          >
            {verified.courseTitle}
          </Title>
          <Text variant='bodyMd' color='primary' fontWeight='semibold' alignment='center' className='verified-owner-name'>
            <strong>{verified.ownerName}</strong> ha superato con successo il test finale del corso.
          </Text>
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
  background-color: ${p => p.theme.colors.verified_card_background};
  border-radius: ${p => p.theme.borders.radius.large};
  margin-top: ${p => p.theme.spacing.space_5};
  overflow: hidden;
  position: relative;
  border: ${p => p.theme.borders.width.medium} solid ${p => p.theme.colors.text.primary};
  text-decoration: none;
  display: flex;
  aspect-ratio: 1;
  max-width: 400px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  .verified-title {
    line-height: 0.9em;
    ${p => p.theme.responsive.small_down} {
      font-size: ${p => p.theme.typography.font_size_500};
    }
  }

  .verified-owner-name {
    ${p => p.theme.responsive.small_down} {
      font-size: ${p => p.theme.typography.font_size_100};
      line-height: ${p => p.theme.typography.font_line_height_1};
    }
  }
`

const CardInner = styled.div`
  padding: ${p => p.theme.spacing.space_6} ${p => p.theme.spacing.space_6}
    ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_6};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const ImageContainer = styled.div`
  border-radius: ${p => p.theme.borders.radius.medium};
  width: 100%;
  width: 120px;
  margin-bottom: ${p => p.theme.spacing.space_4};
  ${p => p.theme.responsive.small_down} {
    width: 90px;
  }
`

const ImageCover = styled.img`
  border-radius: ${p => p.theme.spacing.space_3};
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
  ${p => p.theme.responsive.small_down} {
    font-size: ${p => p.theme.typography.font_size_75};
    line-height: ${p => p.theme.typography.font_line_height_1};
  }
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
  margin-top: ${p => p.theme.spacing.space_1};

  ${p => p.theme.responsive.small_down} {
    font-size: ${p => p.theme.typography.font_size_75};
    line-height: ${p => p.theme.typography.font_line_height_1};
  }
`

const VerifiedId = styled(Text).attrs({
  variant: 'bodyXxxs',
  color: 'primary',
  alignment: 'center',
})`
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: ${p => p.theme.spacing.space_1};
  opacity: 0.6;
  word-wrap: break-word;

  strong {
    font-weight: ${p => p.theme.typography.font_weight_semibold};
  }

  ${p => p.theme.responsive.small_down} {
    font-size: 0.625rem;
  }
`
