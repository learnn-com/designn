import { z } from 'zod'

/**
 * Estrae tutti gli attributi da un tag XML come oggetto chiave-valore
 */
export function extractAttributesFromXmlTag(xmlTag: string): Record<string, string> {
  const cleaned = xmlTag.replace(/[""]/g, '"')
  
  const attributes: Record<string, string> = {}
  
  const attributePattern = /(\w+)="([^"]*)"|(\w+)='([^']*)'/g
  let match
  
  while ((match = attributePattern.exec(cleaned)) !== null) {
    const name = match[1] || match[3]
    const value = match[2] || match[4]
    if (name) {
      attributes[name] = value
    }
  }
  
  return attributes
}

/**
 * Estrae il contenuto interno di un tag XML (children)
 * Gestisce correttamente i tag annidati dello stesso tipo
 */
export function extractChildrenFromXmlTag(xmlTag: string, fullText: string, tagStartIndex: number): string {
  if (xmlTag.trim().endsWith('/>')) {
    return ''
  }
  
  const tagNameMatch = xmlTag.match(/<(\w+)/)
  if (!tagNameMatch) {
    return ''
  }
  
  const tagName = tagNameMatch[1]
  const openingTagEnd = tagStartIndex + xmlTag.length
  
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
        return fullText.substring(openingTagEnd, closeIndex)
      }
      currentIndex = closeIndex + (nextClose?.[0]?.length ?? 0)
    } else if (openIndex < Infinity) {
      depth++
      currentIndex = openIndex + (nextOpen?.[0]?.length ?? 0)
    } else {
      return ''
    }
  }
  
  return ''
}

/**
 * Valida gli attributi XML estratti contro uno schema Zod
 */
export function validateProps<S extends z.ZodTypeAny>(
  attributes: Record<string, string>,
  schema: S
): z.SafeParseReturnType<Record<string, string>, z.infer<S>> {
  return schema.safeParse(attributes)
}
