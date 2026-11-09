import type { Decorator, Preview } from '@storybook/react-vite'

import './preview.css'

// The code panel names each component by its displayName. Name compound parts the way they are written,
// so the code reads `<Accordion.Root>` and not `<AccordionRoot>`.
const components = import.meta.glob<Record<string, unknown>>('../registry/optics/ui/*.tsx', { eager: true })
for (const exports of Object.values(components)) {
  for (const [exportName, value] of Object.entries(exports)) {
    if (!value || typeof value !== 'object') continue
    for (const [part, component] of Object.entries(value)) {
      if (typeof component === 'function') Object.assign(component, { displayName: `${exportName}.${part}` })
    }
  }
}

const withThemeMode: Decorator = (Story, context) => {
  document.documentElement.setAttribute('data-theme-mode', context.globals.theme)
  return <Story />
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      toc: { headingSelector: 'h2, h3', title: 'On this page' },
      // Show the JSX each story renders, with the current args, instead of the story's source.
      source: { type: 'dynamic', excludeDecorators: true },
    },
    options: {
      storySort: { order: ['Introduction', 'Components', 'Layout'] },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme mode for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [withThemeMode],
}

export default preview
