import { createContainer } from './Container/Container.js'
import ContainerDocs from './Container/Container.mdx'

export default {
  title: 'Utilities/Container',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['', 'sm', 'xs'],
    },
    padding: {
      control: { type: 'select' },
      options: ['', 'sm', 'md'],
    },
  },
  parameters: {
    docs: {
      page: ContainerDocs,
    },
  },
}

const Template = ({ size, ...args }) => {
  return createContainer({ size, ...args })
}

export const Default = Template.bind({})
Default.args = {}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  size: 'sm',
}

export const SizeExtraSmall = Template.bind({})
SizeExtraSmall.args = {
  size: 'xs',
}

export const PaddingSmall = Template.bind({})
PaddingSmall.args = {
  padding: 'sm',
}

export const PaddingMedium = Template.bind({})
PaddingMedium.args = {
  padding: 'md',
}
