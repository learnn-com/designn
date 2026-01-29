import * as React from 'react'
import { z } from 'zod'
import { componentSplitter } from './splitter'
import { FormattedMarkdown, FormattedMarkdownProps, FormattedMarkdownSize } from '../FormattedMarkdown'

type AnyZod = z.ZodTypeAny
type SchemaProps<S extends AnyZod> = z.infer<S>

type WithMarkdownChildren<P> = P & { children?: string }

export type MarkdownComponentConfig<Tag extends string, S extends AnyZod> = {
  tag: Tag
  props: S
  component: React.ComponentType<WithMarkdownChildren<SchemaProps<S>>>
}

export function defineMarkdownComponent<Tag extends string, S extends AnyZod>(
  cfg: MarkdownComponentConfig<Tag, S>,
): MarkdownComponentConfig<Tag, S> {
  return cfg
}

export function defineMarkdownComponents<Cs extends readonly MarkdownComponentConfig<string, AnyZod>[]>(
  ...components: Cs
): Cs {
  return components
}

export type RenderMarkdownWithComponentsProps<
  Cs extends readonly MarkdownComponentConfig<string, AnyZod>[],
> = {
  components: Cs
  children: string
  size?: FormattedMarkdownSize
}

export function RenderMarkdownWithComponents<
  Cs extends readonly MarkdownComponentConfig<string, AnyZod>[],
>({ children, components, size = 'sm', ...formattedMarkdownProps }: RenderMarkdownWithComponentsProps<Cs> & FormattedMarkdownProps) {
  const safeChildren = children != null && typeof children === 'string' ? children : ''
  const safeComponents = Array.isArray(components) ? components : []

  try {
    const parts = componentSplitter(safeChildren, [...safeComponents])

    return (
      <>
        {parts.map((part, index) => {
          if (part.type === 'text') {
            return (
              <FormattedMarkdown key={index} size={size} {...formattedMarkdownProps}>
                {part.content}
              </FormattedMarkdown>
            )
          } else if (part.type === 'component') {
            const config = safeComponents[part.componentIndex]
            if (!config) {
              return (
                <FormattedMarkdown key={index} size={size} {...formattedMarkdownProps}>
                  {part.children || ''}
                </FormattedMarkdown>
              )
            }

            const Component = config.component
            const props = { ...(part.props as Record<string, unknown>), children: part.children }
            return React.createElement(Component as React.ComponentType<any>, { key: index, ...props })
          }
          return null
        })}
      </>
    )
  } catch {
    return (
      <FormattedMarkdown key="fallback" size={size} {...formattedMarkdownProps}>
        {safeChildren}
      </FormattedMarkdown>
    )
  }
}
