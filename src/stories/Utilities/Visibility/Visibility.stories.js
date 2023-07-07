import { createVisibility } from './Visibility.js'

export default {
  title: 'Utilities/Visibility',
  render: ({ visible, ...args }) => {
    return createVisibility({ visible, ...args })
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
    },
  },
}

export const Visible = {
  args: {
    visible: true,
  },
}

export const Hidden = {
  args: {
    visible: false,
  },
}
