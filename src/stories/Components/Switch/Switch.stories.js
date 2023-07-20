import { createSwitch } from './Switch.js'

export default {
  title: 'Components/Switch',
  render: ({ ...args }) => {
    return createSwitch({ ...args })
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {},
}

export const Small = {
  args: {
    size: 'small',
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
