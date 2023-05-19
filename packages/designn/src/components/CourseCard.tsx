import { LayoutProps, SpaceProps } from 'styled-system'
import styled, { useTheme } from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { ProgressBar } from './ProgressBar'

export type CourseCardProps = {
  coverImage: string
  companyLogo?: string
  title: string
  subtitle?: string
  buttons?: JSX.Element
  onClick?: Function
  progressPercentage?: number
  hideProgressBar?: boolean
}

export const CourseCard = ({
  coverImage,
  companyLogo,
  title,
  subtitle,
  buttons,
  progressPercentage,
  onClick,
  hideProgressBar
}: CourseCardProps & SpaceProps & LayoutProps) => {
  const { spacing } = useTheme()

  return (
    <StyledCourseCard onClick={onClick} style={{ backgroundImage: `url('${coverImage}')` }}>
      <div className='topContainer'>
        {companyLogo ? <img className='badgeImage' src={companyLogo} /> : null}
      </div>
      <div>
        <div className='bottomContainer'>
          <div className='details'>
            <Title
              variant='headingXl'
              mb={spacing.space_08}
              pb={spacing.space_08}
              truncate
              truncateLines={2}
              lineHeightScale='5'
            >
              {title}
            </Title>
            {subtitle && <Text variant='bodyXs' fontWeight='bold'>{subtitle}</Text>}
          </div>
          <div className='buttonsContainer'>{buttons}</div>
        </div>
        { !hideProgressBar && <ProgressBar percentage={progressPercentage} transition={true}/>}
      </div>
    </StyledCourseCard>
  )
}

const StyledCourseCard = styled.div`
  backgroundimage: url('${p => p.coverImage}');
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
  aspect-ratio: 5/4;

  :before {
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

  :hover {
    cursor: pointer;
  }

  .badgeImage {
    max-width: 50%;
    height: auto;
    z-index: 100;
  }
  .topContainer {
    position: relative;
    padding: ${p => p.theme.spacing.space_5};
  }

  .bottomContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${p => p.theme.spacing.space_5};
    position: relative;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${p => p.theme.spacing.space_3};
    max-width: 85%;
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
