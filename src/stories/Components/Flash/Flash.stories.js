import { createFlash } from './Flash.js'

export default {
  title: 'Components/Flash',
  render: ({ label, ...args }) => {
    return createFlash({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: ['notice', 'info', 'alert', 'warning'],
    },
  },
}

export const Notice = {
  args: {
    label: 'Success Message',
    style: 'notice',
  },
}

export const Info = {
  args: {
    label: 'Info Message',
    style: 'info',
  },
}

export const Alert = {
  args: {
    label: 'Alert Message',
    style: 'alert',
  },
}

export const Warning = {
  args: {
    label: 'Warning Message',
    style: 'warning',
  },
}
