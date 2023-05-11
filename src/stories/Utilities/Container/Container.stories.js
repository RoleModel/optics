import { createContainer } from './Container.js'

export default {
  title: 'Utilities/Container',
  render: ({ size, ...args }) => {
    return createContainer({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['', 'sm', 'xs'],
    },
    padding: {
      control: { type: 'select' },
      options: ['', 'sm', 'md'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  args: {},
}

export const SizeSmall = {
  args: {
    size: 'sm',
  },
}

export const SizeExtraSmall = {
  args: {
    size: 'xs',
  },
}

export const PaddingSmall = {
  args: {
    padding: 'sm',
  },
}

export const PaddingMedium = {
  args: {
    padding: 'md',
  },
}
