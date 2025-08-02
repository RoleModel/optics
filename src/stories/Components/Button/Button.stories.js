import { createButton } from './Button.js'

export default {
  title: 'Components/Button',
  render: ({ label, ...args }) => {
    return createButton({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'destructive', 'warning'],
    },
    noBorder: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    pill: { control: 'boolean' },
    icon: { control: 'boolean' },
    iconWithLabel: { control: 'boolean' },
    showPrefixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within a button',
    },
    showSuffixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within a button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Default = {
  args: {
    label: 'Primary',
    variant: 'default',
  },
}

export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
}

export const Destructive = {
  args: {
    label: 'Delete',
    variant: 'destructive',
  },
}

export const Warning = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
}

export const Active = {
  args: {
    label: 'Active',
    variant: 'primary',
    active: true,
  },
}

export const NoBorder = {
  args: {
    label: 'No Border',
    variant: 'primary',
    noBorder: true,
  },
}

export const Disabled = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
}

export const Pill = {
  args: {
    label: 'Pill',
    variant: 'default',
    pill: true,
  },
}

export const Icon = {
  args: {
    label: '👍',
    variant: 'primary',
    icon: true,
  },
}

export const IconWithLabel = {
  args: {
    label: 'Label',
    variant: 'primary',
    iconWithLabel: true,
  },
}

export const Size = {
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'small',
  },
}
