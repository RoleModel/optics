import type { Decorator, Preview } from '@storybook/react-vite'

import './preview.css'

const withThemeMode: Decorator = (Story, context) => {
  document.documentElement.setAttribute('data-theme-mode', context.globals.theme)
  return <Story />
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      toc: { headingSelector: 'h2, h3', title: 'On this page' },
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
