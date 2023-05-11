import { createTextAlignment } from './TextAlignment.js'

export default {
  title: 'Utilities/Text Alignment',
  render: ({ alignment, ...args }) => {
    return createTextAlignment({ alignment, ...args })
  },
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
  },
}

export const Left = {
  args: {
    alignment: 'left',
  },
}

export const Center = {
  args: {
    alignment: 'center',
  },
}

export const Right = {
  args: {
    alignment: 'right',
  },
}

export const Justify = {
  args: {
    alignment: 'justify',
  },
}
