import { createLayout } from './Layout/Layout.js';
import LayoutDocs from './Layout/Layout.mdx';

export default {
  title: 'Recipes/Layout',
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['basic', 'sidebar'],
    },
    rightSidebar: {
      control: { type: 'boolean' },
    }
  },
  parameters: {
    docs: {
      page: LayoutDocs
    },
  },
};

const Template = ({ ...args }) => {
  return createLayout({ ...args });
};

export const Basic = Template.bind({});
Basic.args = {
  style: 'basic'
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  style: 'sidebar'
};

export const SidebarAndRight = Template.bind({});
SidebarAndRight.args = {
  style: 'sidebar',
  rightSidebar: true,
};
