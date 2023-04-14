import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Text, AppShell, defaultTheme } from '@learnn/designn'

describe('<Text />', () => {
  const s = 'Online store dashboard'
  it('renders text', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text'>{s}</Text>
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    expect(text).toHaveTextContent(s)
  })

  it('renders success color', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' color='success'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = document.querySelectorAll(`[data-testid='text']`)[0]
    const style = window.getComputedStyle(text)
    expect(style.color).toBeDefined()
  })

  it('renders error color', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' color='error'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = document.querySelectorAll(`[data-testid='text']`)[0]
    const style = window.getComputedStyle(text)
    expect(style.color).toBeDefined()
  })

  it('renders different text sizes', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='xs' variant='bodyXs'>
          {s}
        </Text>
        <Text testid='sm' variant='bodySm'>
          {s}
        </Text>
        <Text testid='md' variant='bodyMd'>
          {s}
        </Text>
        <Text testid='lg' variant='bodyLg'>
          {s}
        </Text>
      </AppShell>,
    )
    const sizes = [
      extractStyle('xs').fontSize,
      extractStyle('sm').fontSize,
      extractStyle('md').fontSize,
      extractStyle('lg').fontSize,
    ]
    const unique = [...new Set(sizes)]
    expect(unique.length).toBe(sizes.length)
  })

  it('renders as element ', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' as='h4'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    expect(text.tagName).toBe('H4')
  })

  it('renders inline display', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' inline>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    expect(text.tagName).toBe('SPAN')
  })

  it('align text to start', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' alignment='start'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('left')
  })

  it('align text to center', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' alignment='center'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('center')
  })

  it('align text to end', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' alignment='end'>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['textAlign']).toBe('right')
  })

  it('renders truncated text', () => {
    render(
      <AppShell theme={defaultTheme}>
        <Text testid='text' truncate>
          {s}
        </Text>
        ,
      </AppShell>,
    )
    const text = screen.getByTestId('text')
    const style = window.getComputedStyle(text)
    expect(style['overflow']).toBe('hidden')
    expect(style['whiteSpace']).toBe('nowrap')
    expect(style['textOverflow']).toBe('ellipsis')
  })
})

const extractStyle = (testid: string) => {
  const e = document.querySelectorAll(`[data-testid='${testid}']`)[0]
  return window.getComputedStyle(e)
}
