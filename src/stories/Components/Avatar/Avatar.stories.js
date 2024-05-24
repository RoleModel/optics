import { createAvatar } from './Avatar.js'

export default {
  title: 'Content Components/Avatar',
  render: ({ size, ...args }) => {
    return createAvatar({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    imageSource: { control: 'text' },
    useLink: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    size: 'large',
  },
}

export const Small = {
  args: {
    size: 'small',
  },
}

export const Medium = {
  args: {
    size: 'medium',
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}

export const WithoutLink = {
  args: {
    useLink: false,
  },
}
