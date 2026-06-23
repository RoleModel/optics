import { createFlank } from './Flank.js'

export default {
  title: 'Utilities/Advanced/Flank',
  render: ({ flank, end, ...args }) => {
    return createFlank({ flank, end, ...args })
  },
  argTypes: {
    flank: { control: 'boolean' },
    end: { control: 'boolean' },
    gap: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    example: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    flank: true,
  },
}

export const Without = {
  args: {
    flank: false,
  },
}

export const FlankEnd = {
  args: {
    flank: true,
    end: true
  },
}

export const AvatarExample = {
  args: {
    flank: true,
    example: true
  },
}

export const AvatarExampleEnd = {
  args: {
    flank: true,
    example: true,
    end: true
  },
}
