import { createInput } from './Form.js'

export default {
  title: 'Content Components/Form/Input',
  render: ({ type, ...args }) => {
    return createInput({ type, ...args })
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Text', 'Number', 'Email', 'Password', 'Tel', 'Checkbox', 'Radio', 'Color', 'Date', 'File'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    noBorder: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
      if: { arg: 'type', eq: 'Checkbox' },
    },
  },
}

export const Default = {
  args: {
    type: 'Text',
  },
}

export const Color = {
  args: {
    type: 'color',
  },
}
