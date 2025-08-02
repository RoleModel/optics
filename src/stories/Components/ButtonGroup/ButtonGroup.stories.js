import { createButtonGroup, createButtonGroupToolbar } from './ButtonGroup.js'

export default {
  title: 'Components/ButtonGroup',
  render: ({ toolbar = false, ...args }) => {
    if (toolbar) {
      return createButtonGroupToolbar({ ...args })
    }

    return createButtonGroup({ ...args })
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'destructive', 'warning'],
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
    variant: 'default',
  },
}

export const Primary = {
  args: {
    variant: 'primary',
  },
}

export const Destructive = {
  args: {
    variant: 'destructive',
  },
}

export const Warning = {
  args: {
    variant: 'warning',
  },
}

export const Active = {
  args: {
    variant: 'destructive',
    active: true,
  },
}

export const NoBorder = {
  args: {
    variant: 'primary',
    noBorder: true,
  },
}

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
  },
}

export const Pill = {
  args: {
    variant: 'default',
    pill: true,
  },
}

export const Size = {
  args: {
    variant: 'primary',
    size: 'small',
  },
}

export const Toolbar = {
  args: {
    toolbar: true,
  },
}
