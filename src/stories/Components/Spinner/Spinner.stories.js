import { createSpinner } from './Spinner.js'

export default {
  title: 'Visual Components/Spinner',
  render: ({ size, ...args }) => {
    return createSpinner({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
  },
}

export const Default = {
  args: {
    size: 'large',
  },
}

export const XSmall = {
  args: {
    size: 'x-small',
  },
}

export const Small = {
  args: {
    size: 'small',
  },
}

export const Medium = {
  args: {
    size: 'medium',
  },
}

export const Large = {
  args: {
    size: 'large',
  },
}
