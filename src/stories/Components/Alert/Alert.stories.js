import { createAlert } from './Alert.js'

export default {
  title: 'Content Components/Alert',
  render: ({ title, ...args }) => {
    return createAlert({ title, ...args })
  },
  argTypes: {
    warningLevel: {
      control: { type: 'select' },
      options: ['warning', 'danger', 'info', 'notice'],
    },
    style: {
      control: { type: 'select' },
      options: ['outlined', 'muted', 'filled'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
}

export const Warning = {
  args: {
    title: 'Warning',
    description: 'This is a warning alert',
    warningLevel: 'warning',
    icon: 'warning',
  },
}

export const Danger = {
  args: {
    title: 'Danger',
    description: 'This is a danger alert',
    warningLevel: 'danger',
    icon: 'error',
  },
}
export const Info = {
  args: {
    title: 'Info',
    description: 'This is an info alert',
    warningLevel: 'info',
    icon: 'error',
  },
}

export const Notice = {
  args: {
    title: 'Notice',
    description: 'This is a notice alert',
    warningLevel: 'notice',
    icon: 'task_alt',
  },
}

export const Muted = {
  args: {
    title: 'Warning',
    description: 'This is a muted warning alert',
    warningLevel: 'warning',
    style: 'muted',
    icon: 'volume_mute',
  },
}

export const Filled = {
  args: {
    title: 'Warning',
    description: 'This is a filled warning alert',
    warningLevel: 'warning',
    style: 'filled',
    icon: 'check_box_outline_blank',
  },
}

export const NoIcon = {
  args: {
    title: 'Warning',
    description: 'This is a warning alert with no icon',
    warningLevel: 'warning',
  },
}

export const NoTitle = {
  args: {
    description: 'This is a warning alert with no title',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank',
  },
}

export const Dismissible = {
  args: {
    description: 'This is a warning alert with a close icon',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank',
    dismissible: true,
  },
}
