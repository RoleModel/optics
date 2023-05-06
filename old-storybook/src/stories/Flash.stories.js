import { createFlash } from './Flash/Flash.js'
import FlashDocs from './Flash/Flash.mdx'

export default {
  title: 'Components/Flash',
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: ['notice', 'info', 'alert', 'warning'],
    },
  },
  parameters: {
    docs: {
      page: FlashDocs,
    },
  },
}

const Template = ({ label, ...args }) => {
  return createFlash({ label, ...args })
}

export const Notice = Template.bind({})
Notice.args = {
  label: 'Success Message',
  style: 'notice',
}

export const Info = Template.bind({})
Info.args = {
  label: 'Info Message',
  style: 'info',
}

export const Alert = Template.bind({})
Alert.args = {
  label: 'Alert Message',
  style: 'alert',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning Message',
  style: 'warning',
}
