import { createIcon } from './Icon/Icon.js'
import IconDocs from './Icon/Icon.mdx'

export default {
  title: 'Components/Icon',
  argTypes: {
    name: { control: 'text' },
    filled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['normal', 'large', 'x-large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semi-bold', 'bold'],
    },
    emphasis: {
      control: { type: 'select' },
      options: ['low', 'normal', 'high'],
    },
  },
  parameters: {
    docs: {
      page: IconDocs,
    },
  },
}

const Template = ({ name, ...args }) => {
  return createIcon({ name, ...args })
}

export const Default = Template.bind({})
Default.args = {
  name: 'settings',
}

export const Filled = Template.bind({})
Filled.args = {
  name: 'settings',
  filled: true,
}

export const Large = Template.bind({})
Large.args = {
  name: 'settings',
  size: 'large',
}

export const Bold = Template.bind({})
Bold.args = {
  name: 'settings',
  weight: 'bold',
}

export const Emphasis = Template.bind({})
Emphasis.args = {
  name: 'settings',
  emphasis: 'high',
}
