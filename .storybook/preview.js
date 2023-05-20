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
