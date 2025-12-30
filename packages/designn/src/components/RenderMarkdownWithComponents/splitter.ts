import React from 'react'
import { z } from 'zod'
import { extractAttributesFromXmlTag, validateProps } from './utils'

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
): { closingTagStart: number; closingTagEnd: number } | null {
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
        const closingTagLength = nextClose?.[0]?.length ?? 0
        return {
          closingTagStart: closeIndex,
          closingTagEnd: closeIndex + closingTagLength
        }
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
  
  const parts: Part[] = []
  const processedRanges: Array<{ start: number; end: number }> = []
  let lastIndex = 0
  
  const isProcessed = (index: number): boolean => {
    return processedRanges.some(range => index >= range.start && index < range.end)
  }
  
  const findNextUnprocessedTag = (startIndex: number): RegExpExecArray | null => {
    pattern.lastIndex = startIndex
    let match: RegExpExecArray | null = null
    
    while ((match = pattern.exec(text)) !== null) {
      if (!isProcessed(match.index)) {
        return match
      }
    }
    
    return null
  }
  
  let match = findNextUnprocessedTag(0)
  
  while (match !== null) {
    if (match.index > lastIndex) {
      const textBefore = text.substring(lastIndex, match.index)
      if (textBefore) {
        parts.push({
          type: 'text',
          content: textBefore
        })
      }
    }
    
    const tagMatch = match[0].match(/<(\w+)/i)
    const tagName = tagMatch?.[1]?.toLowerCase()
    const config = tagName ? configs.find(c => c.tag.toLowerCase() === tagName) : null
    
    if (!config || !tagName) {
      parts.push({
        type: 'text',
        content: match[0]
      })
      lastIndex = match.index + match[0].length
      match = findNextUnprocessedTag(lastIndex)
      continue
    }
    
    const isSelfClosing = match[0].trim().endsWith('/>')
    
    if (isSelfClosing) {
      const attributes = extractAttributesFromXmlTag(match[0])
      const validation = validateProps(attributes, config.props)
      
      if (validation.success) {
        const componentIndex = configs.indexOf(config)
        parts.push({
          type: 'component',
          tag: config.tag,
          props: validation.data,
          componentIndex
        })
      } else {
        parts.push({
          type: 'text',
          content: match[0]
        })
      }
      
      lastIndex = match.index + match[0].length
      match = findNextUnprocessedTag(lastIndex)
      continue
    }
    
    const closingTagInfo = findClosingTagIndex(match[0], tagName, text, match.index)
    
    if (closingTagInfo === null) {
      parts.push({
        type: 'text',
        content: match[0]
      })
      lastIndex = match.index + match[0].length
      match = findNextUnprocessedTag(lastIndex)
      continue
    }
    
    const attributes = extractAttributesFromXmlTag(match[0])
    const validation = validateProps(attributes, config.props)
    
    if (!validation.success) {
      parts.push({
        type: 'text',
        content: match[0]
      })
      lastIndex = match.index + match[0].length
      match = findNextUnprocessedTag(lastIndex)
      continue
    }
    
    const openingTagEnd = match.index + match[0].length
    const children = text.substring(openingTagEnd, closingTagInfo.closingTagStart)
    
    processedRanges.push({
      start: match.index,
      end: closingTagInfo.closingTagEnd
    })
    
    const componentIndex = configs.indexOf(config)
    parts.push({
      type: 'component',
      tag: config.tag,
      props: validation.data,
      children: children || undefined,
      componentIndex
    })
    
    lastIndex = closingTagInfo.closingTagEnd
    match = findNextUnprocessedTag(lastIndex)
  }
  
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex)
    if (remainingText) {
      parts.push({
        type: 'text',
        content: remainingText
      })
    }
  }
  
  return parts
}
