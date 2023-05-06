import { createConfirmDialog } from './ConfirmDialog/ConfirmDialog.js'
import ConfirmDialogDocs from './ConfirmDialog/ConfirmDialog.mdx'

export default {
  title: 'Components/Confirm Dialog',
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
  },
  parameters: {
    docs: {
      page: ConfirmDialogDocs,
    },
  },
}

const Template = ({ title, ...args }) => {
  return createConfirmDialog({ title, ...args })
}

export const Default = Template.bind({})
Default.args = {
  title: 'Confirm Title',
  message: 'Are you sure you want to delete this?',
}

export const Inline = Template.bind({})
Inline.args = {
  title: 'Confirm Title',
  message: 'Are you sure you want to delete this?',
  inlineDemo: true,
}
