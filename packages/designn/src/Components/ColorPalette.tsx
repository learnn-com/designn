import styled from 'styled-components'
import { Hexcode, ColorRange } from '../utils/colors'
import { Empty } from './Empty'

const ColorBar = ({ color, number }: { color: Hexcode; number: 0 | 100 | 300 | 500 | 700 | 900 }) => {
  if (number === 0) {
    return <Empty />
  }
  return (
    <Row>
      <Label>{number}</Label>
      <Circle fillColor={color} title={color} />
    </Row>
  )
}

type Direction = 'horizontal' | 'vertical'
export type ColorPaletteProps = { palette: ColorRange; direction?: Direction }

export const ColorPalette = ({ palette, direction }: ColorPaletteProps) => {
  const toColorNumber = (i: number) => {
    switch (i) {
      case 1:
        return 100
      case 2:
        return 300
      case 3:
        return 500
      case 4:
        return 700
      case 5:
        return 900

      default:
        return 0
    }
  }
  return (
    <Container direction={direction ?? 'horizontal'}>
      {palette.map((v, i) => (
        <ColorBar key={i} color={v} number={toColorNumber(i + 1)} />
      ))}
    </Container>
  )
}

const Container = styled.div<{ direction: Direction }>`
  display: inline-flex;
  flex-direction: ${(props) => (props.direction === 'horizontal' ? 'row' : 'column')};
`

const Row = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 10px;
`

const Label = styled.span``

const Circle = styled.span<{ fillColor: Hexcode }>`
  height: 35px;
  width: 35px;
  background-color: ${(props) => props.fillColor};
  border-radius: 50%;
  display: inline-block;
`
