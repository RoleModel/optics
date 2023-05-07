/** @type { import('@storybook/html').Preview } */

const preview = {
  decorators: [
    (Story, context) =>
      `<div>
        <script>document.documentElement.dataset.themeMode = '${context.globals.themeMode}'</script>
        ${Story().outerHTML || Story()}
      </div>`,
  ],
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

import '!style-loader!css-loader!sass-loader!../src/optics.scss'
import '!style-loader!css-loader!sass-loader!./documentation.scss'
