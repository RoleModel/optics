import { createCustomSidebar } from './CustomSidebar/CustomSidebar.js'
import CustomSidebarDocs from './CustomSidebar/CustomSidebar.mdx'

export default {
  title: 'Recipes/Custom Sidebar',
  argTypes: {
    example: {
      control: { type: 'select' },
      options: ['domains', '16six'],
    },
    style: {
      control: { type: 'select' },
      options: ['drawer', 'rail'],
    },
  },
  parameters: {
    docs: {
      page: CustomSidebarDocs,
    },
  },
}

const Template = ({ ...args }) => {
  return createCustomSidebar({ ...args })
}

export const Domains = Template.bind({})
Domains.args = {
  example: 'domains',
  style: 'drawer',
}

export const SixteenSix = Template.bind({})
SixteenSix.args = {
  example: '16six',
  style: 'drawer',
}
