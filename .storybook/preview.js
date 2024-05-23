/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Overview',
          [
            'Base Reset',
            'File Organization',
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
      }
    }
  },
}

import './preview.scss'

export default preview
