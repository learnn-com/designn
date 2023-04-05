import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Title } from '@gianlucacarucci5/desio'

describe('<Title />', () => {
  it('renders its children', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title">
        {text}
      </Title>
    )
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent(text)
  })

  it('can render any children type', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title">
        <span data-testid="title_span">{text}</span>
      </Title>
    )
    const title_span = screen.getByTestId('title_span')
    expect(title_span).toHaveTextContent(text)
  })

  it('renders level 1 as h1', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title">
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`h1[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders level 2 as h2', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={2} testid="title">
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`h2[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders level 3 as h3', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={3} testid="title">
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`h3[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders inline display', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title" inline>
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.display).toBe('inline')
  })

  it('renders primary color', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title" primary>
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })

  it('renders muted', () => {
    const text = 'Online store dashboard'
    render(
      <Title level={1} testid="title" muted>
        {text}
      </Title>
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })
})
