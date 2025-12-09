import { createStack } from './Stack.js'

export default {
  title: 'Utilities/Stack',
  render: ({ stack, ...args }) => {
    return createStack({ stack, ...args })
  },
  argTypes: {
    stack: { control: 'boolean' },
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
    stack: true,
  },
}

export const Without = {
  args: {
    stack: false,
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
