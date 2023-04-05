import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Text } from '@gianlucacarucci5/desio'

describe('<Text />', () => {
  it('renders text', () => {
    const s = 'Online store dashboard'
    render(<Text testid="text">{s}</Text>)
    const text = screen.getByTestId('text')
    expect(text).toHaveTextContent(s)
  })

  it('renders text disabled', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" disabled>
        {s}
      </Text>
    )
    const text = document.querySelectorAll(`[data-testid='text']`)[0]
    const style = window.getComputedStyle(text)
    expect(style.opacity).toBeDefined()
  })

  it('renders text muted', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" muted>
        {s}
      </Text>
    )
    const text = document.querySelectorAll(`[data-testid='text']`)[0]
    const style = window.getComputedStyle(text)
    expect(style.color).toBeDefined()
  })

  it('renders different text sizes', () => {
    const s = 'Online store dashboard'
    render(
      <>
        <Text testid="large" large>
          {s}
        </Text>
        <Text testid="regular">{s}</Text>
        <Text testid="small" small>
          {s}
        </Text>
        <Text testid="mini" micro>
          {s}
        </Text>
      </>
    )
    const sizes = [
      extractStyle('large').fontSize,
      extractStyle('regular').fontSize,
      extractStyle('small').fontSize,
      extractStyle('mini').fontSize
    ]
    const unique = [...new Set(sizes)]
    expect(unique.length).toBe(sizes.length)
  })

  it('renders h4 for large text', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" large>
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    expect(text.tagName).toBe('H4')
  })

  it('renders inline display', () => {
    const text = 'Online store dashboard'
    render(
      <Text testid="text" inline>
        {text}
      </Text>
    )
    const title = document.querySelectorAll(`span[data-testid='text']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.display).toBe('inline')
  })

  it('renders bold text', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" bold>
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['fontWeight']).toBe('700')
  })

  it('align text to parent', () => {
    const s = 'Online store dashboard'
    render(
      <div style={{ textAlign: 'center' }}>
        <Text testid="text" align="parent">
          {s}
        </Text>
      </div>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('')
  })

  it('align text to parent as default', () => {
    const s = 'Online store dashboard'
    render(
      <div style={{ textAlign: 'center' }}>
        <Text testid="text">{s}</Text>
      </div>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('')
  })

  it('align text to start', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" align="start">
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('left')
  })

  it('align text to center', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" align="center">
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('center')
  })

  it('align text to end', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" align="end">
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('right')
  })

  it('renders no wrapped text', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" noWrap>
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['whiteSpace']).toBe('nowrap')
  })

  it('renders truncated text', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" truncated>
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['overflow']).toBe('hidden')
    expect(style['whiteSpace']).toBe('nowrap')
    expect(style['textOverflow']).toBe('ellipsis')
  })

  it('renders uppercase', () => {
    const s = 'Online store dashboard'
    render(
      <Text testid="text" uppercased>
        {s}
      </Text>
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textTransform']).toBe('uppercase')
  })
})

const extractStyle = (testid: string) => {
  const e = document.querySelectorAll(`[data-testid='${testid}']`)[0]
  return window.getComputedStyle(e)
}
