import { useTheme } from './useTheme'
import { useColorSpace } from './useColorSpace'

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
            'OKLCH Colors',
            'Addons',
          ],
          'Tokens',
          'Utilities',
          [
            'Introduction',
            'Container',
            'Item Width',
            'Margin',
            'Text Alignment',
            'Visibility',
            'Flex',
            'Gap',
            'Advanced',
          ],
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
  colorSpace: {
    name: 'Color space',
    description: 'Color token set: optics.css (HSL) or optics-oklch.css (OKLCH)',
    defaultValue: 'hsl',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'hsl', title: 'HSL' },
        { value: 'oklch', title: 'OKLCH' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [useTheme, useColorSpace]
