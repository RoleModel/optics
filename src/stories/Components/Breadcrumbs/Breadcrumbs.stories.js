import { createBreadcrumbs } from './Breadcrumbs.js'

export default {
  title: 'Components/Breadcrumbs',
  render: ({ size, ...args }) => {
    return createBreadcrumbs({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    separator: { control: 'text' },
  },
}

export const Default = {
  args: {},
}

export const Small = {
  args: {
    size: 'small',
  },
}

export const Large = {
  args: {
    size: 'large',
  },
}

export const SeparatorIcon = {
  args: {
    separator: 'folder',
  },
}
