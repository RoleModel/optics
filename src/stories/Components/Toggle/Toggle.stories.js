import { createToggle } from './Toggle.js'

export default {
  title: 'Components/Toggle',
  render: ({ ...args }) => {
    return createToggle({ ...args })
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
