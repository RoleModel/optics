import { createNavigationRail } from './NavigationRail/NavigationRail.js';
import NavigationRailDocs from './NavigationRail/NavigationRail.mdx';

export default {
  title: 'Components/Navigation Rail',
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'primary', 'subtle-primary'],
    },
    brand: { control: 'boolean' },
    position: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    activeLink: {
      control: { type: 'select' },
      options: ['Home', 'Get Started', 'Develop', 'Foundations', 'Styles', 'Components'],
    },
  },
  parameters: {
    docs: {
      page: NavigationRailDocs
    },
  },
};

const Template = ({ ...args }) => {
  return createNavigationRail({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  style: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
};

export const SubtlePrimary = Template.bind({});
SubtlePrimary.args = {
  style: 'subtle-primary',
};

export const NoBrand = Template.bind({});
NoBrand.args = {
  style: 'default',
  brand: false,
};

export const Centered = Template.bind({});
Centered.args = {
  style: 'default',
  position: 'center',
};

export const End = Template.bind({});
End.args = {
  style: 'default',
  position: 'end',
};

export const Logout = Template.bind({});
Logout.args = {
  style: 'default',
  logout: true,
};

export const AlternateActive = Template.bind({});
AlternateActive.args = {
  style: 'default',
  activeLink: 'Components',
};
