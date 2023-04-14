import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Title, AppShell, defaultTheme } from '@learnn/designn'

describe('<Title />', () => {
  it('renders its children', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent(text)
  })

  it('can render any children type', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title'>
          <span data-testid='title_span'>{text}</span>
        </Title>
        ,
      </AppShell>,
    )
    const title_span = screen.getByTestId('title_span')
    expect(title_span).toHaveTextContent(text)
  })

  it('renders headingXs as h4', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingXs' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h4[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders headingSm as h3', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingSm' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h3[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders headingMd as h2', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h2[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })
  it('renders headingLg as h1', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingLg' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h1[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })
  it('renders headingXl as h1', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingXl' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h1[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })
  it('renders heading2xl as h1', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='heading2xl' testid='title'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`h1[data-testid='title']`)[0]
    expect(title).not.toBeUndefined()
  })

  it('renders primary color', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title' color='primary'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })
  it('renders dimmed color', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title' color='dimmed'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })
  it('renders error color', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title' color='error'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })
  it('renders success color', () => {
    const text = 'Just Learnn It'
    render(
      <AppShell theme={defaultTheme}>
        <Title variant='headingMd' testid='title' color='success'>
          {text}
        </Title>
        ,
      </AppShell>,
    )
    const title = document.querySelectorAll(`[data-testid='title']`)[0]
    const style = window.getComputedStyle(title)
    expect(style.color).not.toBeFalsy()
  })
})
