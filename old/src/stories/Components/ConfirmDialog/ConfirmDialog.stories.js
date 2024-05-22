import { createConfirmDialog } from './ConfirmDialog.js'

export default {
  title: 'Popup Content Components/Confirm Dialog',
  render: ({ title, ...args }) => {
    return createConfirmDialog({ title, ...args })
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
  },
}

export const Default = {
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
  },
}

export const Inline = {
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
    inlineDemo: true,
  },
}
