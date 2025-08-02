import { createIcon } from './Icon.js'

export default {
  title: 'Components/Icon',
  render: ({ name, ...args }) => {
    return createIcon({ name, ...args })
  },
  argTypes: {
    iconPack: {
      control: { type: 'select' },
      options: ['Material Symbols Outlined', 'Phosphor', 'Tabler', 'Feather', 'Lucide'],
    },
    name: { control: 'text' },
    filled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'light', 'normal', 'semi-bold', 'bold'],
    },
    emphasis: {
      control: { type: 'select' },
      options: ['low', 'normal', 'high'],
    },
    duotone: {
      control: 'boolean',
      if: { arg: 'iconPack', eq: 'Phosphor' },
    },
  },
}

export const Default = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
  },
}

export const Filled = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    filled: true,
  },
}

export const Large = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    size: 'large',
  },
}

export const Bold = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    weight: 'bold',
  },
}

export const Emphasis = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    emphasis: 'high',
  },
}
