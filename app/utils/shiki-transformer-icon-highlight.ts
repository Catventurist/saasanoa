import type { ShikiTransformer } from 'shiki'

export interface TransformerIconHighlightOptions {
  htmlIcon?: (icon: string) => string
}

const ICON_COLLECTIONS = [
  'simple-icons',
  'vscode-icons',
  'tabler',
  'lucide'
]

function parseIconName(text: string): { collection: string, name: string, format: 'i' | 'colon' } | null {
  let cleanText = text
  if (/^['"`].*['"`]$/.test(text)) {
    cleanText = text.slice(1, -1)
  }
  if (cleanText.startsWith('i-')) {
    const rest = cleanText.slice(2)
    for (const collection of ICON_COLLECTIONS) {
      if (rest.startsWith(`${collection}-`)) {
        const name = rest.slice(collection.length + 1)
        if (name && /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(name)) {
          return { collection, name, format: 'i' }
        }
      }
    }
  }
  const colonIndex = cleanText.indexOf(':')
  if (colonIndex > 0) {
    const collection = cleanText.slice(0, colonIndex)
    const name = cleanText.slice(colonIndex + 1)
    if (ICON_COLLECTIONS.includes(collection) && name && /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(name)) {
      return { collection, name, format: 'colon' }
    }
  }
  return null
}

export function transformerIconHighlight(options: TransformerIconHighlightOptions = {}): ShikiTransformer {
  const { htmlIcon } = options
  return {
    name: 'shiki-transformer-icon-highlight',
    span(hast, _line, _col, _lineElement, token) {
      const text = token.content
      const parsed = parseIconName(text)
      if (!parsed) return

      const iconIdentifier = `${parsed.collection}:${parsed.name}`
      const iconUrl = `https://api.iconify.design/${iconIdentifier}.svg?color=%23000`
      const iconElement = htmlIcon
        ? { type: 'raw' as const, value: htmlIcon(iconIdentifier) }
        : {
            type: 'element' as const,
            tagName: 'i',
            properties: {
              class: 'shiki-icon-highlight',
              style: `--shiki-icon-url: url('${iconUrl}')`
            },
            children: []
          }
      if (hast.children) {
        hast.children.unshift(iconElement)
      }
    }
  }
}
