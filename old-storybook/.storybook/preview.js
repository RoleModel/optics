export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import '!style-loader!css-loader!sass-loader!../src/optics.scss'
import '!style-loader!css-loader!sass-loader!./documentation.scss'