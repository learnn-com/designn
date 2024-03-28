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
import { ReactNode, useRef, useState } from 'react'
import { Box } from './Box'
import { CircularButton, Variant } from './CircularButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Color } from 'utils/colors'

export type HorizontalScrollProps = {
  gapScale?: SpacingScale
  children?: ReactNode
  shadowColor?: Color
  arrowStyle?: Variant
}

export const HorizontalScroll = ({
  children,
  arrowStyle = 'flat',
  ...props
}: HorizontalScrollProps & FlexboxProps & SpaceProps & ColorProps & BorderProps) => {
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtend] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollRight = () => {
    if (!scrollRef.current) return

    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    const newScrollPosition = scrollRef.current.scrollLeft + clientWidth

    if (newScrollPosition + clientWidth >= scrollWidth) {
      setIsAtend(true)
    }
    if (newScrollPosition > 0) {
      setIsAtStart(false)
    }
    scrollSlider(newScrollPosition)
  }

  const handleScrollLeft = () => {
    if (!scrollRef.current) return

    const clientWidth = scrollRef.current.clientWidth
    const newScrollPosition = scrollRef.current.scrollLeft - clientWidth

    if (newScrollPosition < clientWidth) {
      setIsAtend(false)
    }
    if (newScrollPosition <= 0) {
      setIsAtStart(true)
    }
    scrollSlider(newScrollPosition)
  }

  const scrollSlider = (position: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      left: position,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <StyledHorizontalScroll {...props}>
        <div className='container' ref={scrollRef}>
          {!isAtStart ? (
            <div className='leftShadow'>
              <CircularButton
                variant={arrowStyle}
                onPress={handleScrollLeft}
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
              />{' '}
            </div>
          ) : (
            <></>
          )}
          {children}
          {!isAtEnd ? (
            <div className='rightShadow'>
              <CircularButton
                variant={arrowStyle}
                onPress={handleScrollRight}
                icon={<FontAwesomeIcon icon={faChevronRight} />}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </StyledHorizontalScroll>
    </>
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
    padding-top: 5px;
    padding-bottom: 5px;
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
    height: 100%;
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    content: '';
    background: rgb(0, 0, 0);
    background: linear-gradient(
      to left,
      ${p => p.shadowColor ?? 'rgb(0, 0, 0)'} 20%,
      rgba(33, 33, 33, 0) 80%
    );
  }

  .leftShadow {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20000;
    height: 100%;
    margin-left: 0;
    height: 100%;
    width: 100px;
    display: flex;
    content: '';
    align-items: center;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      to right,
      ${p => p.shadowColor ?? 'rgb(0, 0, 0)'} 20%,
      rgba(33, 33, 33, 0) 80%
    );
  }
`
