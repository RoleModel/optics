import { createGrid } from './Grid.js'

export default {
  title: 'Utilities/Advanced/Grid',
  render: ({ grid, ...args }) => {
    return createGrid({ grid, ...args })
  },
  argTypes: {
    grid: { control: 'boolean' },
    gap: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    columns: {
      control: {
        type: 'number',
        min: 2,
        max: 6,
        step: 1,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    grid: true,
  },
}

export const Without = {
  args: {
    grid: false,
  },
}

export const TwoColumns = {
  args: {
    grid: true,
    columns: 2,
  },
}

export const SixColumns = {
  args: {
    grid: true,
    columns: 6,
  },
}
