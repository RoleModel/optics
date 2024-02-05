/** @type { import('@storybook/html').Preview } */
import { useTheme } from './useTheme'

const preview = {
  decorators: [useTheme],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'Table of Contents',
      },
    },
    options: {
      storySort: {
        order: [
          'Overview',
          [
            'Introduction',
            'Base Reset',
            'Organization',
            'Selective Imports',
            'Tokens',
            'Themes',
            'Scale Overriding',
            'Addons',
          ],
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

export default preview

export const globalTypes = {
  themeMode: {
    description: 'Color Theme Mode',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme Mode',
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
}

import './documentation.scss'
