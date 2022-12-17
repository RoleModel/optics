import { createBadge } from './Badge/Badge.js'
import BadgeDocs from './Badge/Badge.mdx'

export default {
  title: 'Components/Badge',
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
  },
  parameters: {
    docs: {
      page: BadgeDocs,
    },
  },
}

const Template = ({ label, ...args }) => {
  return createBadge({ label, ...args })
}

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  style: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  style: 'primary',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning',
  style: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Danger',
  style: 'danger',
}

export const Info = Template.bind({})
Info.args = {
  label: 'Info',
  style: 'info',
}

export const Notice = Template.bind({})
Notice.args = {
  label: 'Notice',
  style: 'notice',
}

export const Pill = Template.bind({})
Pill.args = {
  label: 'Pill',
  style: 'default',
  pill: true,
}

export const NotificationButton = Template.bind({})
NotificationButton.args = {
  label: '5',
  style: 'danger',
  pill: true,
  inButton: 'right',
}
