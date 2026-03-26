import { LayoutProps, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { MouseEventHandler } from 'react'
import { useTheme } from 'styled-components'

export type ExpertCardProps = {
  coverImage: string
  title: string
  subtitle?: string
  extraInfo?: string
  buttons?: JSX.Element
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ExpertCard = ({
  coverImage,
  title,
  subtitle,
  extraInfo,
  buttons,
  onClick,
}: ExpertCardProps & SpaceProps & LayoutProps) => {
  const { spacing } = useTheme()
  return (
    <StyledExpertCard onClick={onClick}>
      <StyledExpertImage style={{ backgroundImage: `url('${coverImage}')` }} />
      <div className='content'>
        <div className='details'>
          <Title
            variant='headingMd'
            fontWeight='black'
            color='primary'
            truncate
            truncateLines={2}
            marginBottom={spacing.space_1}
          >
            {title}
          </Title>

          {subtitle && (
            <Text fontWeight='semibold' color='primary' truncate truncateLines={2}>
              {subtitle}
            </Text>
          )}

          {extraInfo && (
            <Text
              className='extraInfo'
              fontWeight='regular'
              color='dimmed'
              truncate
              truncateLines={2}
            >
              {extraInfo}
            </Text>
          )}
        </div>

        {buttons && <div className='buttonsContainer'>{buttons}</div>}
      </div>
    </StyledExpertCard>
  )
}

const StyledExpertCard = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #121214;
  overflow: hidden;
  border-radius: ${p => p.theme.borders.radius.large};
  width: 100%;
  border: none;
  padding: 0;
  text-align: left;

  &:hover {
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${p => p.theme.spacing.space_4};
    padding: ${p => p.theme.spacing.space_3};
    background: #121214;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${p => p.theme.spacing.space_1};
    min-width: 0;
  }

  .extraInfo {
    max-width: 100%;
  }

  .buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: auto;
  }
`

const StyledExpertImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  aspect-ratio: 1 / 1;
  flex: 0 0 auto;
  border-bottom-left-radius: ${p => p.theme.borders.radius.large};
  border-bottom-right-radius: ${p => p.theme.borders.radius.large};
`
