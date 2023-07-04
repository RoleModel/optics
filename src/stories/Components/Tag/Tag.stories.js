import { createTag } from './Tag.js'

export default {
  title: 'Components/Tag',
  render: ({ label, ...args }) => {
    return createTag({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['default', 'readonly', 'danger', 'warning', 'info', 'notice'],
    },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Default',
    type: 'default',
  },
}

export const Readonly = {
  args: {
    label: 'Readonly',
    type: 'readonly',
  },
}

export const Danger = {
  args: {
    label: 'Danger',
    type: 'danger',
  },
}

export const Warning = {
  args: {
    label: 'Warning',
    type: 'warning',
  },
}

export const Info = {
  args: {
    label: 'Info',
    type: 'info',
  },
}

export const Notice = {
  args: {
    label: 'Notice',
    type: 'notice',
  },
}