import { LayoutProps, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export type ProgressBarProps = {
  percentage?: number
  transition?: boolean
}

export const ProgressBar = ({ percentage, transition }: ProgressBarProps & SpaceProps & LayoutProps) => {
  const [progressAnimation, setProgressAnimation] = useState(0)

  useEffect(() => {
    setProgressAnimation(percentage ?? 0)
  }, [percentage])

  return (
    <StyledProgressBar 
    transition={transition}
    >
      <div className='progress' style={{ width: `${progressAnimation}%` }}></div>
    </StyledProgressBar>
  )
}

const StyledProgressBar = styled.div`
  position: relative;
  height: 2px;
  background-color: ${p => p.theme.colors.outline};
  width: 100%;

  .progress {
    transition: ${p => p.transition ? 'width 0.5s ease-in-out' : 'none'};
    height: 2px;
    background-color: ${p => p.theme.colors.text.base};
    max-width: 100%;
  }
`
