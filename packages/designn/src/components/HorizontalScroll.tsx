import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from 'styled-system'
import { SpacingScale } from 'theme/tokens/spacing'
import { ReactNode } from 'react'
import { Box } from './Box'
import { Color } from 'utils/colors'

export type HorizontalScrollProps = {
  gapScale?: SpacingScale
  children?: ReactNode
  shadowColor?: Color
}

export const HorizontalScroll = ({
  children,
  ...props
}: HorizontalScrollProps & FlexboxProps & SpaceProps & ColorProps & BorderProps) => {
  return (
    <StyledHorizontalScroll {...props}>
      <div className='container'>
        {children}
        <div className='rightShadow' />
      </div>
    </StyledHorizontalScroll>
  )
}

const StyledHorizontalScroll = styled(Box)`
  position: relative;
  ${color}
  ${flexbox}
  ${space}
  ${border}

  .container {
    overflow: auto;
    white-space: nowrap;
    -webkit-box-align: center;
    -ms-overflow-style: none;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    display: flex;
    flex-direction: row;
  }

  .container > * {
    ${p => (p.gapScale ? `margin-right: ${p.theme.spacing['space_' + p.gapScale]}` : '')}
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .rightShadow {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20000;
    height: 100%;
    margin-right: 0;
  }

  .rightShadow::before {
    height: 100%;
    width: 80px;
    display: inline-block;
    content: '';
    pointer-events: none;
    background: rgb(0, 0, 0);
    background: linear-gradient(to left, ${p => p.shadowColor ?? 'rgb(0, 0, 0)'} 20%, rgba(33, 33, 33, 0) 80%);
  }
`
