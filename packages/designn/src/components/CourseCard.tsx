import { LayoutProps, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { ProgressBar } from './ProgressBar'
import { MouseEventHandler } from 'react'

export type CourseCardProps = {
  coverImage: string
  companyLogo?: string
  title: string
  subtitle?: string
  buttons?: JSX.Element
  onClick?: MouseEventHandler<HTMLDivElement>
  progressPercentage?: number
  hideProgressBar?: boolean
  rightComponent?: JSX.Element
  size?: "lg" | "md"
}

export const CourseCard = ({
  coverImage,
  companyLogo,
  title,
  subtitle,
  buttons,
  progressPercentage,
  onClick,
  hideProgressBar,
  rightComponent,
  size = "lg"
}: CourseCardProps & SpaceProps & LayoutProps) => {

  const renderTitle = () => {
    switch (size) {
      default:
      case 'lg': {
        return (
          <Title variant='headingXl' truncate truncateLines={2} lineHeightScale='5'>
              {title}
            </Title>
        )
      }
      case 'md': {
        return (
          <Title variant='headingSm' truncate truncateLines={2} lineHeightScale='2'>
              {title}
            </Title>
        )
      }
    }
  }
  return (
    <StyledCourseCard onClick={onClick} style={{ backgroundImage: `url('${coverImage}')` }} size={size}>
      <div className='topContainer'>
        <div className='leftContainer'>
          {companyLogo ? <img className='badgeImage' src={companyLogo} /> : null}
        </div>
        <div className='rightContainer'>
          {rightComponent}
        </div>
            
      </div>
      <div>
        <div className='bottomContainer'>
          <div className='details'>
            {renderTitle()}
            <div className='subtitleContainer'>
              {subtitle && (
                <Text variant='bodyXs' fontWeight='bold'>
                  {subtitle}
                </Text>
              )}
            </div>
          </div>
          <div className='buttonsContainer'>{buttons}</div>
        </div>
        {!hideProgressBar && <ProgressBar percentage={progressPercentage} transition={true} />}
      </div>
    </StyledCourseCard>
  )
}

const StyledCourseCard = styled.div<{size?: "lg" | "md", pro?: boolean}>`
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
  aspect-ratio: ${p => p.size === 'md' ? '7/5' : '5/4'};

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

  .topContainer {
    position: relative;
    padding: ${p => p.size === 'md' ? `${p.theme.spacing.space_3} ${p.theme.spacing.space_3} 0
      ${p.theme.spacing.space_3}` : `${p.theme.spacing.space_5} ${p.theme.spacing.space_5} 0
      ${p.theme.spacing.space_5}`};
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
    justify-content: space-between;
    padding: ${p => p.size === 'md' ? `0 ${p.theme.spacing.space_3} ${p.theme.spacing.space_3}
      ${p.theme.spacing.space_3}` : `0 ${p.theme.spacing.space_5} ${p.theme.spacing.space_5}
      ${p.theme.spacing.space_5}`};
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
    align-items: flex-start;
    gap: ${p => p.size === 'md' ? p.theme.spacing.space_1 : p.theme.spacing.space_3};
    max-width: 85%;

    ${p => p.theme.responsive.medium_down} {
      gap: 0;
    }

    .subtitleContainer {
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
