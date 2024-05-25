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
