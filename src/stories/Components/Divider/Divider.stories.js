import { createDivider } from './Divider.js'

export default {
  title: 'Components/Divider',
  render: ({ option1, ...args }) => {
    return createDivider({ option1, ...args })
  },
  argTypes: {
    vertical: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export const Default = {
  args: {},
}

export const Vertical = {
  args: {
    vertical: true,
  },
}

export const Size = {
  args: {
    size: 'large',
  },
}

export const Spacing = {
  args: {
    spacing: 'large',
  },
}
