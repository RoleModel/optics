import { createIcon } from './Icon.js'

export default {
  title: 'Visual Components/Icon',
  render: ({ name, ...args }) => {
    return createIcon({ name, ...args })
  },
  argTypes: {
    name: { control: 'text' },
    filled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semi-bold', 'bold'],
    },
    emphasis: {
      control: { type: 'select' },
      options: ['low', 'normal', 'high'],
    },
  },
}

export const Default = {
  args: {
    name: 'settings',
  },
}

export const Filled = {
  args: {
    name: 'settings',
    filled: true,
  },
}

export const Large = {
  args: {
    name: 'settings',
    size: 'large',
  },
}

export const Bold = {
  args: {
    name: 'settings',
    weight: 'bold',
  },
}

export const Emphasis = {
  args: {
    name: 'settings',
    emphasis: 'high',
  },
}
