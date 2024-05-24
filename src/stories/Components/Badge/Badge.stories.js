import { createBadge } from './Badge.js'

export default {
  title: 'Content Components/Badge',
  render: ({ label, ...args }) => {
    return createBadge({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: ['default', 'primary', 'warning', 'danger', 'info', 'notice'],
    },
    pill: { control: 'boolean' },
    inButton: {
      control: { type: 'select' },
      options: ['no', 'right', 'left'],
    },
    showPrefixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within a badge',
    },
    showSuffixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within a badge',
    },
  },
}

export const Default = {
  args: {
    label: 'Default',
    style: 'default',
  },
}

export const Primary = {
  args: {
    label: 'Primary',
    style: 'primary',
  },
}

export const Warning = {
  args: {
    label: 'Warning',
    style: 'warning',
  },
}

export const Danger = {
  args: {
    label: 'Danger',
    style: 'danger',
  },
}

export const Info = {
  args: {
    label: 'Info',
    style: 'info',
  },
}

export const Notice = {
  args: {
    label: 'Notice',
    style: 'notice',
  },
}

export const Pill = {
  args: {
    label: 'Pill',
    style: 'default',
    pill: true,
  },
}

export const NotificationButton = {
  args: {
    label: '5',
    style: 'danger',
    pill: true,
    inButton: 'right',
  },
}
