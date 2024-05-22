/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
      }
    }
  },
}

import './preview.scss'

export default preview
