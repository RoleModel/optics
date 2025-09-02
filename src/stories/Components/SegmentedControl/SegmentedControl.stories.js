import { createSegmentedControl } from './SegmentedControl.js'

export default {
  title: 'Components/Segmented Control',
  render: ({ size, ...args }) => {
    return createSegmentedControl({ size, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    options: { control: 'number' },
    showPrefixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within the options',
    },
    showSuffixIcon: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of using icons within the options',
    },
  },
}

export const Default = {
  args: {
    showPrefixIcon: false,
    showSuffixIcon: false,
    options: 3,
    size: 'medium',
  },
}

export const Size = {
  args: {
    label: 'Small',
    size: 'small',
  },
}
