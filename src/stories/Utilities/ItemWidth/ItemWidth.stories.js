import { createItemWidth } from './ItemWidth.js'

export default {
  title: 'Utilities/Item Width',
  render: ({ width, ...args }) => {
    return createItemWidth({ width, ...args })
  },
  argTypes: {
    width: {
      control: { type: 'select' },
      options: [
        'half',
        'full',
        'one-fifth',
        'two-fifths',
        'three-fifths',
        'four-fifths',
        'one-quarter',
        'three-quarters',
        'one-third',
        'two-thirds',
      ],
    },
  },
}

export const Half = {
  args: {
    width: 'half',
  },
}

export const Full = {
  args: {
    width: 'full',
  },
}

export const OneFifth = {
  args: {
    width: 'one-fifth',
  },
}

export const TwoFifths = {
  args: {
    width: 'two-fifths',
  },
}

export const ThreeFifths = {
  args: {
    width: 'three-fifths',
  },
}

export const FourFifths = {
  args: {
    width: 'four-fifths',
  },
}

export const OneQuarter = {
  args: {
    width: 'one-quarter',
  },
}

export const ThreeQuarters = {
  args: {
    width: 'three-quarters',
  },
}

export const OneThird = {
  args: {
    width: 'one-third',
  },
}

export const TwoThirds = {
  args: {
    width: 'two-thirds',
  },
}
