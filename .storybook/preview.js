/** @type { import('@storybook/html').Preview } */
const preview = {
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
          ['Introduction', 'Selective Imports', 'Tokens', 'Themes', 'Scale Overriding', 'Addons'],
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

import '!style-loader!css-loader!sass-loader!../src/optics.scss'
import '!style-loader!css-loader!sass-loader!./documentation.scss'
