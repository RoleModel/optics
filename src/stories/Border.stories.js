import { createBorder } from './Border/Border.js';
import BorderDocs from './Border/Border.mdx';

export default {
  title: 'Tokens/Border',
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['none', 'all', 'top', 'right', 'bottom', 'left', 'y', 'x'],
    },
    inset: { control: 'boolean' },
  },
  parameters: {
    docs: {
      page: BorderDocs
    },
  },
};

const Template = ({ position, ...args }) => {
  return createBorder({ position, ...args });
};

export const Default = Template.bind({});
Default.args = {
  position: 'all',
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
};

export const X = Template.bind({});
X.args = {
  position: 'x',
};

export const Y = Template.bind({});
Y.args = {
  position: 'y',
};

export const InsetLeft = Template.bind({});
InsetLeft.args = {
  position: 'left',
  inset: true,
};
