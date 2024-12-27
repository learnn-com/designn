import { LayoutProps, SpaceProps } from 'styled-system'
import styled, { useTheme } from 'styled-components'
import { ProgressBar } from './ProgressBar'
import { Text } from './Text'
import { MouseEventHandler } from 'react'

export type PathCardProps = {
  coverImage: string
  onClick?: MouseEventHandler<HTMLDivElement>
  subtitle?: string
  progressPercentage?: number
  hideProgressBar?: boolean
  size?: "lg" | "md" | "sm"
}

export const PathCard = ({
  coverImage,
  onClick,
  subtitle,
  progressPercentage,
  hideProgressBar,
  size = "lg"
}: PathCardProps & SpaceProps & LayoutProps) => {
  const {  } = useTheme()

  return (
    <StyledPathCard size={size} onClick={onClick} style={{ backgroundImage: `url('${coverImage}')` }}>
      <div className='topContainer'>
      </div>
      <div>
        <div className='bottomContainer'>
          <div className='details'>
            {subtitle && (
              <Text
                variant={
                  size === 'md' ? 'bodyXs' : size === 'lg' ? 'bodySm' : 'bodyXxxs'
                }
                fontWeight='bold'
              >
                {subtitle}
              </Text>
            )}
          </div>
        </div>
        { !hideProgressBar && <ProgressBar percentage={progressPercentage} transition={true}/>}
      </div>
    </StyledPathCard>
  )
}

const StyledPathCard = styled.div<{size?: "md" | "lg" | "sm"}>`
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

  :hover {
    cursor: pointer;
  }

  .badgeImage {
    max-width: 100%;
    height: auto;
    z-index: 100;
  }
  .topContainer {
    position: relative;
    padding: ${p => p.theme.spacing.space_5};
    display: flex;
    flex-direction: row;
    align-items: flex-start;

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
    padding: ${p => p.size === "sm" ? p.theme.spacing.space_4 : p.theme.spacing.space_5};
    position: relative;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${p => p.theme.spacing.space_3};
    max-width: 85%;

    ${p => p.theme.responsive.small_down} {
      display: none
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
