import { createButtonGroup, createButtonGroupToolbar } from './ButtonGroup.js'

export default {
  title: 'Navigation Components/ButtonGroup',
  render: ({ toolbar = false, ...args }) => {
    if (toolbar) {
      return createButtonGroupToolbar({ ...args })
    }

    return createButtonGroup({ ...args })
  },
  argTypes: {
    priority: {
      control: { type: 'select' },
      options: ['default', 'primary', 'delete', 'warning'],
    },
    noBorder: { control: 'boolean' },
    active: { control: 'boolean' },
    pill: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    segmentedPreview: {
      control: 'boolean',
      description:
        'This is not a class. It just provides an example of creating a segmented control showing the currently active piece.',
    },
  },
}

export const Default = {
  args: {
    priority: 'default',
  },
}

export const Primary = {
  args: {
    priority: 'primary',
  },
}

export const Delete = {
  args: {
    priority: 'delete',
  },
}

export const Warning = {
  args: {
    priority: 'warning',
  },
}

export const Active = {
  args: {
    priority: 'delete',
    active: true,
  },
}

export const NoBorder = {
  args: {
    priority: 'primary',
    noBorder: true,
  },
}

export const Disabled = {
  args: {
    priority: 'primary',
    disabled: true,
  },
}

export const Pill = {
  args: {
    priority: 'default',
    pill: true,
  },
}

export const Size = {
  args: {
    priority: 'primary',
    size: 'small',
  },
}

export const Toolbar = {
  args: {
    toolbar: true,
  },
}
