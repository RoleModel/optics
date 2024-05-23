import { createFontFamily } from './Font.js'

export default {
  title: 'Tokens/Typography/Font Family',
  render: ({ family, ...args }) => {
    return createFontFamily({ family, ...args })
  },
  argTypes: {
    family: {
      control: { type: 'select' },
      options: ['Noto Sans', 'Tilt Neon'],
    },
  },
}

export const Default = {
  args: {
    family: 'Noto Sans',
  },
}

export const Alternate = {
  args: {
    family: 'Tilt Neon',
  },
}
