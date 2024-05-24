import { createSelect } from './Form.js'

export default {
  title: 'Content Components/Form/Select',
  render: ({ options, ...args }) => {
    return createSelect({ options, ...args })
  },
  argTypes: {
    options: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {
    options: 1,
    multiple: false,
  },
}
