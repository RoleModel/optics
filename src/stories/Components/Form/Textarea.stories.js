import { createTextarea } from './Form.js'

export default {
  title: 'Content Components/Form/Textarea',
  render: ({ ...args }) => {
    return createTextarea({ ...args })
  },
  argTypes: {
    readonly: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {},
}
