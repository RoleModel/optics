import { createShadow } from './Shadow/Shadow.js';
import ShadowDocs from './Shadow/Shadow.mdx';

export default {
  title: 'Utilities/Shadow',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
    },
  },
  parameters: {
    docs: {
      page: ShadowDocs
    },
  },
};

const Template = ({ size, ...args }) => {
  return createShadow({ size, ...args });
};

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};
