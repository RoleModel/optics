import { createFrame } from './Frame.js'

export default {
  title: 'Utilities/Advanced/Frame',
  render: ({ frame, ...args }) => {
    return createFrame({ frame, ...args })
  },
  argTypes: {
    frame: { control: 'boolean' },
    aspect: {
      control: { type: 'select' },
      options: ['square', 'landscape', 'portrait', '4-3', '3-4', '3-2', '2-3'],
    },
    inlineSize: {
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    frame: true,
  },
}

export const Without = {
  args: {
    frame: false,
  },
}

export const Square = {
  args: {
    frame: true,
    aspect: 'square',
  },
}

export const Landscape = {
  args: {
    frame: true,
    aspect: 'landscape',
  },
}

export const Portrait = {
  args: {
    frame: true,
    aspect: 'portrait',
  },
}

export const FourThree = {
  args: {
    frame: true,
    aspect: '4-3',
  },
}

export const ThreeFour = {
  args: {
    frame: true,
    aspect: '3-4',
  },
}

export const ThreeTwo = {
  args: {
    frame: true,
    aspect: '3-2',
  },
}

export const TwoThree = {
  args: {
    frame: true,
    aspect: '2-3',
  },
}

export const CustomInlineSize = {
  args: {
    frame: true,
    aspect: 'square',
    inlineSize: '50%',
  },
}

