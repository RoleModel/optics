import { createInput } from './Form.js'

export default {
  title: 'Components/Form/Input',
  render: ({ type, ...args }) => {
    return createInput({ type, ...args })
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password', 'tel', 'checkbox', 'radio', 'color', 'date'],
    },
    readonly: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
      if: { arg: 'type', eq: 'checkbox' },
    },
  },
}

export const Default = {
  args: {
    type: 'text',
  },
}

export const Color = {
  args: {
    type: 'color',
  },
}
