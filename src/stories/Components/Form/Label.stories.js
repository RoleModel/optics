import { createLabel } from './Form.js'

export default {
  title: 'Components/Form/Label',
  render: ({ label, ...args }) => {
    return createLabel({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'A Label',
  },
}
