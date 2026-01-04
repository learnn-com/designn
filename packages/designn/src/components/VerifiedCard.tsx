import { FC } from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { SpaceProps, LayoutProps } from 'styled-system'
import { useTheme } from 'styled-components'

export interface VerifiedProps {
  courseTitle: string
  attemptId: string
  submittedAt: string
  startedAt: string
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
  const { spacing } = useTheme()
  const formattedDate = formatDate(new Date(Date.parse(verified.submittedAt)))

  return (
    <StyledCard
      href={verificationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <CardInner>
      <ImageContainer>
            <ImageCover src={verifiedImageUrl} alt="Verified" />
          </ImageContainer>
        <InfoContainer>
          <Title
            variant="headingXl"
            lineHeightScale='6'
            alignment="center"
            truncate
            truncateLines={2}
            color="primary"
            className="verified-title"
            mb={spacing.space_4}
          >
            {verified.courseTitle}
          </Title>
          <DateContainer>
            <DateLabel>DATA VERIFICA:</DateLabel>
            <DateValue>{formattedDate}</DateValue>
          </DateContainer>
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
  display: block;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  .verified-title {
    ${p => p.theme.responsive.small_down} {
      font-size: ${p => p.theme.typography.font_size_300};
      line-height: ${p => p.theme.typography.font_line_height_3};
    }
  }
`

const CardInner = styled.div`
  padding: ${p => p.theme.spacing.space_6} ${p => p.theme.spacing.space_4};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const ImageContainer = styled.div`
  border-radius: ${p => p.theme.borders.radius.medium};
  width: 100%;
  width: 120px;
  margin-bottom: ${p => p.theme.spacing.space_4};
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
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.spacing.space_4};
  flex: 1;
`

const DateLabel = styled(Text).attrs({
  variant: 'bodyXxs',
  color: 'primary',
  fontWeight: 'semibold',
  alignment: 'center',
})`
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
`

const DateValue = styled(Text).attrs({
  variant: 'bodyXxs',
  color: 'primary',
  fontWeight: 'semibold',
  alignment: 'center',
})`
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
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
