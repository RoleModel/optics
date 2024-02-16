import { createAlignedHeader } from './AlignedHeader.js'

export default {
  title: 'Recipes/Aligned Header',
  render: ({ ...args }) => {
    return createAlignedHeader({ ...args })
  },
  argTypes: {
    example: {
      control: { type: 'select' },
      options: ['badge', 'icon-button'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const Badge = {
  args: {
    example: 'badge',
  },
}

export const IconButton = {
  args: {
    example: 'icon-button',
  },
}
