import React from 'react'
import { z } from 'zod'
import { extractAttributesFromXmlTag, extractChildrenFromXmlTag, validateProps } from './utils'

type AnyZod = z.ZodTypeAny
type SchemaProps<S extends AnyZod> = z.infer<S>

type WithMarkdownChildren<P> = P & { children?: string }

export type MarkdownComponentConfig<Tag extends string, S extends AnyZod> = {
  tag: Tag
  props: S
  component:
    | React.ComponentType<WithMarkdownChildren<SchemaProps<S>>>
    | ((props: WithMarkdownChildren<SchemaProps<S>>) => React.ReactNode)
}

export type ComponentConfig<S extends AnyZod> = MarkdownComponentConfig<string, S>

export type Part = 
  | {
      type: 'text'
      content: string
    }
  | {
      type: 'component'
      tag: string
      props: Record<string, unknown>
      children?: string
      componentIndex: number
    }


function findClosingTagIndex(
  openingTag: string,
  tagName: string,
  fullText: string,
  tagStartIndex: number
): number | null {
  if (openingTag.trim().endsWith('/>')) {
    return null // Self-closing tag, no closing tag
  }
  
  const openingTagEnd = tagStartIndex + openingTag.length
  let depth = 1
  let currentIndex = openingTagEnd
  const openingPattern = new RegExp(`<${tagName}(?:\\s+[^>]*)?>`, 'gi')
  const closingPattern = new RegExp(`</${tagName}\\s*>`, 'gi')
  
  while (depth > 0 && currentIndex < fullText.length) {
    openingPattern.lastIndex = currentIndex
    closingPattern.lastIndex = currentIndex
    
    const nextOpen = openingPattern.exec(fullText)
    const nextClose = closingPattern.exec(fullText)
    
    openingPattern.lastIndex = 0
    closingPattern.lastIndex = 0
    
    let openIndex = nextOpen ? nextOpen.index : Infinity
    let closeIndex = nextClose ? nextClose.index : Infinity
    
    if (closeIndex < openIndex) {
      depth--
      if (depth === 0) {
        return closeIndex + (nextClose?.[0]?.length ?? 0)
      }
      currentIndex = closeIndex + (nextClose?.[0]?.length ?? 0)
    } else if (openIndex < Infinity) {
      depth++
      currentIndex = openIndex + (nextOpen?.[0]?.length ?? 0)
    } else {
      return null
    }
  }
  
  return null
}

export function componentSplitter<S extends AnyZod>(
  text: string,
  configs: ComponentConfig<S>[]
): Part[] {
  const tagNames = configs.map(c => c.tag).join('|')
  const pattern = new RegExp(`(<(${tagNames})\\s+[^>]*/?>)`, 'gi')
  
  const segments: Array<{ content: string; isTag: boolean; index: number; endIndex?: number }> = []
  let lastIndex = 0
  let match
  
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        content: text.substring(lastIndex, match.index),
        isTag: false,
        index: lastIndex
      })
    }
    
    const tagMatch = match[0].match(/<(\w+)/i)
    const tagName = tagMatch?.[1]?.toLowerCase()
    const config = tagName ? configs.find(c => c.tag.toLowerCase() === tagName) : null
    
    let endIndex: number | undefined = undefined
    if (config && tagName && !match[0].trim().endsWith('/>')) {
      const closingIndex = findClosingTagIndex(match[0], tagName, text, match.index)
      if (closingIndex !== null) {
        endIndex = closingIndex
      }
    }
    
    segments.push({
      content: match[0],
      isTag: true,
      index: match.index,
      endIndex
    })
    
    if (endIndex !== undefined) {
      lastIndex = endIndex
    } else {
      lastIndex = match.index + match[0].length
    }
  }
  
  if (lastIndex < text.length) {
    segments.push({
      content: text.substring(lastIndex),
      isTag: false,
      index: lastIndex
    })
  }
  
  const parts: Part[] = []
  
  for (const segment of segments) {
    if (!segment.isTag) {
      if (segment.content) {
        parts.push({
          type: 'text',
          content: segment.content
        })
      }
    } else {
      const tagMatch = segment.content.match(/<(\w+)/i)
      if (!tagMatch) {
        parts.push({
          type: 'text',
          content: segment.content
        })
        continue
      }
      
      const tagName = tagMatch[1].toLowerCase()
      const config = configs.find(c => c.tag.toLowerCase() === tagName)
      
      if (!config) {
        parts.push({
          type: 'text',
          content: segment.content
        })
        continue
      }
      
      const attributes = extractAttributesFromXmlTag(segment.content)
      
      const validation = validateProps(attributes, config.props)
      
      if (!validation.success) {
        parts.push({
          type: 'text',
          content: segment.content
        })
      } else {
        const children = extractChildrenFromXmlTag(segment.content, text, segment.index)
        const componentIndex = configs.indexOf(config)
        
        parts.push({
          type: 'component',
          tag: config.tag,
          props: validation.data,
          children: children || undefined,
          componentIndex
        })
      }
    }
  }
  
  return parts
}
