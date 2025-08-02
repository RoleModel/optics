import { createTextarea } from './Form.js'

export default {
  title: 'Components/Form/Textarea',
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
