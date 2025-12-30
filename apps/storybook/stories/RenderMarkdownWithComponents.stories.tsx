import { z } from 'zod'
import {
  AppShell,
  Button,
  defaultTheme,
  RenderMarkdownWithComponents,
  defineMarkdownComponent,
  defineMarkdownComponents,
} from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/RenderMarkdownWithComponents',
  component: RenderMarkdownWithComponents,
} as ComponentMeta<typeof RenderMarkdownWithComponents>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof RenderMarkdownWithComponents> = () => node
  return template.bind({})
}

const HighlightBox: React.FC<{ color?: string; children?: React.ReactNode }> = ({
  color = 'yellow',
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: color === 'yellow' ? '#fff9c4' : '#c8e6c9',
        padding: '12px',
        borderRadius: '8px',
        margin: '16px 0',
        border: `2px solid ${color === 'yellow' ? '#fdd835' : '#66bb6a'}`,
      }}
    >
      {children}
    </div>
  )
}

const MARKDOWN_WITHOUT_COMPONENTS = `
# Main Title

This is an example paragraph with **bold** and *italic* text.

## Subtitle

- Bullet point
- Another item
- Third item

\`\`\`javascript
console.log('Example code');
\`\`\`
`

export const MarkdownWithoutComponents = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={[]}>
        {MARKDOWN_WITHOUT_COMPONENTS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithoutComponents.storyName = 'Markdown without components'

const buttonComponent = defineMarkdownComponent({
  tag: 'button',
  props: z.object({
    variant: z.union([z.literal('primary'), z.literal('secondary'), z.literal('tertiary')]),
  }),
  component: ({ variant }) => (
    <Button variant={variant} label="Click here" onPress={() => alert('Clicked!')} />
  ),
})

const MARKDOWN_WITH_ONE_PROP = `
# Example with Button

This is a normal paragraph.

<button variant="primary" />

Here's another paragraph after the component.
`

export const MarkdownWithOneProp = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(buttonComponent)}>
        {MARKDOWN_WITH_ONE_PROP}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithOneProp.storyName = 'Markdown with component and one prop'

const buttonWithSizeComponent = defineMarkdownComponent({
  tag: 'button',
  props: z.object({
    variant: z.union([z.literal('primary'), z.literal('secondary'), z.literal('tertiary')]),
    size: z.union([z.literal('sm'), z.literal('md'), z.literal('lg')]),
  }),
  component: ({ variant, size }) => (
    <Button variant={variant} size={size} label="Large button" onPress={() => alert('Clicked!')} />
  ),
})

const MARKDOWN_WITH_TWO_PROPS = `
# Example with Button and two props

This is a normal paragraph.

<button variant="secondary" size="lg" />

Here's another paragraph after the component.
`

export const MarkdownWithTwoProps = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(buttonWithSizeComponent)}>
        {MARKDOWN_WITH_TWO_PROPS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithTwoProps.storyName = 'Markdown with component and two props'

const MARKDOWN_WITH_INVALID_PROPS = `
# Example with invalid props

This is a normal paragraph.

<button variant="invalid" />

This tag will not be validated and will be displayed as normal text.

<button variant="primary" invalidProp="test" />

This one also won't be validated because it has an unexpected prop.
`

export const MarkdownWithInvalidProps = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(buttonComponent)}>
        {MARKDOWN_WITH_INVALID_PROPS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithInvalidProps.storyName = 'Markdown with component with invalid props'

const MARKDOWN_WITH_VALID_AND_INVALID_PROPS = `
# Example with valid and invalid props

This is a normal paragraph.

<button variant="primary" />

This component will be rendered correctly.

<button variant="invalid" />

This one won't be validated and will be displayed as text.

<button variant="secondary" />

And this one will be rendered correctly.
`

export const MarkdownWithValidAndInvalidProps = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(buttonComponent)}>
        {MARKDOWN_WITH_VALID_AND_INVALID_PROPS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithValidAndInvalidProps.storyName = 'Markdown with component with both valid and invalid props'

const highlightComponent = defineMarkdownComponent({
  tag: 'highlight',
  props: z.object({
    color: z.union([z.literal('yellow'), z.literal('green')]),
  }),
  component: ({ color, children }) => (
    <HighlightBox color={color}>
      <RenderMarkdownWithComponents components={[]}>{children || ''}</RenderMarkdownWithComponents>
    </HighlightBox>
  ),
})

const MARKDOWN_WITH_CHILDREN = `
# Example with component and children

This is a normal paragraph.

<highlight color="yellow">
This is the content inside the highlight component. It can contain **markdown** and *formatting*.
</highlight>

Another normal paragraph.

<highlight color="green">
This is another highlight with green color. It can also contain lists:
- Item 1
- Item 2
- Item 3
</highlight>

Final paragraph.
`

export const MarkdownWithChildren = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(highlightComponent)}>
        {MARKDOWN_WITH_CHILDREN}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithChildren.storyName = 'Markdown with component that requires children'

const MARKDOWN_WITH_TWO_COMPONENTS = `
# Example with two different components

This is a normal paragraph with some text.

<button variant="primary" />

Here's some more text between components.

<highlight color="yellow">
This is a highlight box with **bold text** and *italic text*.
</highlight>

Another paragraph with regular text.

<button variant="secondary" />

<highlight color="green">
This is another highlight with a different color. It can contain:
- Lists
- **Formatted text**
- Multiple lines
</highlight>

Final paragraph to show text after components.
`

export const MarkdownWithTwoComponents = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents
        components={defineMarkdownComponents(buttonComponent, highlightComponent)}
      >
        {MARKDOWN_WITH_TWO_COMPONENTS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithTwoComponents.storyName = 'Markdown with two different components'

const nestedHighlightComponent = defineMarkdownComponent({
  tag: 'highlight',
  props: z.object({
    color: z.union([z.literal('yellow'), z.literal('green')]),
  }),
  component: ({ color, children }) => (
    <HighlightBox color={color}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(nestedHighlightComponent)}>
        {children || ''}
      </RenderMarkdownWithComponents>
    </HighlightBox>
  ),
})

const MARKDOWN_WITH_NESTED_COMPONENTS = `
# Example with nested components

This is a normal paragraph before the nested components.

<highlight color="yellow">
Questo è il contenuto del primo highlight esterno. Può contenere **markdown** e *formattazione*.

- Lista item 1
- Lista item 2

<highlight color="green">
Questo è il contenuto dell'highlight interno nidificato. Anche questo può contenere **markdown** e altre formattazioni.

- Item interno 1
- Item interno 2
- Item interno 3

Ecco un altro paragrafo dentro l'highlight interno.
</highlight>

Continuazione del contenuto del primo highlight dopo quello nidificato.
</highlight>

Paragrafo normale dopo gli highlight nidificati.
`

export const MarkdownWithNestedComponents = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <RenderMarkdownWithComponents components={defineMarkdownComponents(nestedHighlightComponent)}>
        {MARKDOWN_WITH_NESTED_COMPONENTS}
      </RenderMarkdownWithComponents>
    </div>
  </AppShell>,
)

MarkdownWithNestedComponents.storyName = 'Markdown with nested components'

