import { createAlert } from './Alert/Alert.js'
import AlertDocs from './Alert/Alert.mdx'

export default {
  title: 'Components/Alert',
  argTypes: {
    warningLevel: {
      control: { type: 'select' },
      options: ['warning', 'danger', 'info', 'notice'],
    },
    style: {
      control: { type: 'select' },
      options: ['filled', 'muted', 'outlined'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  parameters: {
    docs: {
      page: AlertDocs,
    },
  },
}

const Template = ({ title, ...args }) => {
  return createAlert({ title, ...args })
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
  description: 'This is a warning alert',
  warningLevel: 'warning',
  style: 'filled',
  icon: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  title: 'Danger',
  description: 'This is a danger alert',
  warningLevel: 'danger',
  style: 'filled',
  icon: 'error',
}

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
  description: 'This is an info alert',
  warningLevel: 'info',
  style: 'filled',
  icon: 'error',
}

export const Notice = Template.bind({})
Notice.args = {
  title: 'Notice',
  description: 'This is a notice alert',
  warningLevel: 'notice',
  style: 'filled',
  icon: 'task_alt',
}

export const Muted = Template.bind({})
Muted.args = {
  title: 'Warning',
  description: 'This is a muted warning alert',
  warningLevel: 'warning',
  style: 'muted',
  icon: 'volume_mute',
}

export const Outlined = Template.bind({})
Outlined.args = {
  title: 'Warning',
  description: 'This is an outlined warning alert',
  warningLevel: 'warning',
  style: 'outlined',
  icon: 'check_box_outline_blank',
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  title: 'Warning',
  description: 'This is a warning alert with no icon',
  warningLevel: 'warning',
  style: 'outlined',
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  description: 'This is a warning alert with no title',
  warningLevel: 'warning',
  style: 'outlined',
  icon: 'check_box_outline_blank',
}

export const Dismissible = Template.bind({})
Dismissible.args = {
  description: 'This is a warning alert with a close icon',
  warningLevel: 'warning',
  style: 'outlined',
  icon: 'check_box_outline_blank',
  dismissible: true,
}
