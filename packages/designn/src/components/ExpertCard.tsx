import { LayoutProps, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { MouseEventHandler } from 'react'

export type ExpertCardProps = {
  coverImage: string
  title: string
  subtitle?: string
  buttons?: JSX.Element
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const ExpertCard = ({
  coverImage,
  title,
  subtitle,
  buttons,
  onClick,
}: ExpertCardProps & SpaceProps & LayoutProps) => {
  return (
    <StyledExpertCard onClick={onClick} style={{ backgroundImage: `url('${coverImage}')` }}>
      <div className='topContainer'>
        <div className='leftContainer'>
        </div>
        <div className='rightContainer'>
        </div>
      </div>
      <div>
        <div className='bottomContainer'>
          <div className='details'>
            <Title variant='headingLg' truncate truncateLines={2} lineHeightScale='5' alignment='center'>
              {title}
            </Title>
            <div className='subtitleContainer'>
              {subtitle && (
                <Text variant='bodyXs' fontWeight='bold' alignment='center'>
                  {subtitle}
                </Text>
              )}
            </div>
          </div>
          <div className='buttonsContainer'>{buttons}</div>
        </div>
      </div>
    </StyledExpertCard>
  )
}

const StyledExpertCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  border-radius: ${p => p.theme.borders.radius.large};
  height: 100%;
  aspect-ratio: 4/5;

  &:before {
    content: '';
    background: rgb(12, 12, 12);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    height: 45%;
    width: 100%;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .badgeImage {
    max-width: 100%;
    height: auto;
    z-index: 100;
  }
  .proBadge {
    background-color: ${p => p.theme.colors.card_background};
    border-radius: ${p => p.theme.spacing.space_2};
    padding: ${p => p.theme.spacing.space_025} ${p => p.theme.spacing.space_3};
    position: absolute;

    span {
      color: ${p => p.theme.colors.text.base};
      font-size: ${p => p.theme.typography.font_size_100};
      font-weight: ${p => p.theme.typography.font_weight_bold};
      line-height: ${p => p.theme.typography.font_line_height_1};
    }
  }
  .topContainer {
    position: relative;
    padding: ${p => p.theme.spacing.space_5} ${p => p.theme.spacing.space_5} 0
      ${p => p.theme.spacing.space_5};
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${p => p.theme.responsive.medium_down} {
      padding: ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_3} 0
        ${p => p.theme.spacing.space_3};
    }

    .leftContainer {
      display: flex;
      flex: 1;
      justify-content: flex-start;
    }
    .rightContainer {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }

  .bottomContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 ${p => p.theme.spacing.space_5} ${p => p.theme.spacing.space_5}
      ${p => p.theme.spacing.space_5};
    position: relative;

    ${p => p.theme.responsive.medium_down} {
      padding: 0 ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_3}
        ${p => p.theme.spacing.space_3};
    }
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.spacing.space_1};
    max-width: 85%;

    ${p => p.theme.responsive.medium_down} {
      gap: 0;
    }

    .subtitleContainer {
      margin-bottom: ${p => p.theme.spacing.space_08};
      margin-top: ${p => p.theme.spacing.space_08};
      ${p => p.theme.responsive.small_down} {
        display: none;
        margin: 0m;
      }
    }
  }
  .title {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    padding-bottom: 0.2rem;
    color: rgb(255, 255, 255);
    font-weight: 800;
    margin-bottom: 0.2rem;
  }

  .description {
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: -0.33px;
    color: rgb(255, 255, 255);
  }

  .buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
`
