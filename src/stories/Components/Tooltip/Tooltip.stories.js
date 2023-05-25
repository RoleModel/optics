import { createTooltip } from './Tooltip.js'

export default {
  title: 'Components/Tooltip',
  render: ({ option1, ...args }) => {
    return createTooltip({ option1, ...args })
  },
  argTypes: {
    text: {
      control: 'text',
      description:
        'Note: The wrapping div with margin is not required. It is only used to create space around the tooltip for this example.',
    },
    position: {
      control: { type: 'select' },
      options: ['none', 'top', 'right', 'bottom', 'left'],
    },
    example: {
      control: { type: 'select' },
      options: ['text', 'button', 'icon'],
    },
  },
}

export const Default = {
  args: {
    text: 'A basic tooltip',
    position: 'none',
    example: 'text',
  },
}

export const Top = {
  args: {
    text: 'A basic top tooltip',
    position: 'top',
    example: 'text',
  },
}

export const Right = {
  args: {
    text: 'A basic right tooltip',
    position: 'right',
    example: 'text',
  },
}

export const Bottom = {
  args: {
    text: 'A basic bottom tooltip',
    position: 'bottom',
    example: 'text',
  },
}

export const Left = {
  args: {
    text: 'A basic left tooltip',
    position: 'left',
    example: 'text',
  },
}

export const Button = {
  args: {
    text: 'A button tooltip',
    position: 'none',
    example: 'button',
  },
}

export const Icon = {
  args: {
    text: 'An icon tooltip',
    position: 'none',
    example: 'icon',
  },
}

export const LotsOfText = {
  args: {
    text: 'An example of a tooltip with a lot of content that will wrap',
    position: 'none',
    example: 'text',
  },
}
