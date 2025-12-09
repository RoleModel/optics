import { createSplit } from './Split.js'

export default {
  title: 'Utilities/Split',
  render: ({ split, ...args }) => {
    return createSplit({ split, ...args })
  },
  argTypes: {
    split: { control: 'boolean' },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
    },
    gap: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    split: true,
  },
}

export const Without = {
  args: {
    split: false,
  },
}

export const AlignStretch = {
  args: {
    alignItems: 'stretch',
  },
}

export const AlignStart = {
  args: {
    alignItems: 'start',
  },
}

export const AlignCenter = {
  args: {
    alignItems: 'center',
  },
}

export const AlignEnd = {
  args: {
    alignItems: 'end',
  },
}

export const AlignBaseline = {
  args: {
    alignItems: 'baseline',
  },
}
