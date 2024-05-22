import { createGap } from './Gap.js'

export default {
  title: 'Utilities/Gap',
  render: ({ size, ...args }) => {
    return createGap({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export const ExtraExtraSmall = {
  args: {
    size: 'xxs',
  },
}

export const ExtraSmall = {
  args: {
    size: 'xs',
  },
}

export const Small = {
  args: {
    size: 'sm',
  },
}

export const Medium = {
  args: {
    size: 'md',
  },
}

export const Large = {
  args: {
    size: 'lg',
  },
}

export const ExtraLarge = {
  args: {
    size: 'xl',
  },
}
