import { useTheme } from './useTheme'

const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'On this page',
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Overview',
          ['Base Reset', 'File Organization', 'Selective Imports', 'Tokens', 'Themes', 'Scale Overriding', 'Addons'],
          'Tokens',
          'Utilities',
          'Navigation Components',
          'Content Components',
          'Popup Content Components',
          'Visual Components',
          'Components',
          'Recipes',
        ],
      },
    },
  },
}

import './preview.css'

export default preview

export const globalTypes = {
  theme: {
    name: 'Toggle theme mode',
    description: 'Global theme mode for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [useTheme]
