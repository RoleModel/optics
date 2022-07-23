import { createSelect } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

export default {
  title: 'Components/Form/Select',
  argTypes: {
    options: {
      control: {
        type: 'number',
        min: 1,
        max: 5
      }
    },
  },
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

const Template = ({ options, ...args }) => {
  return createSelect({ options, ...args });
};

export const Default = Template.bind({});
Default.args = {
  options: 1,
};
