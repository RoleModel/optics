import { createTextarea } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

export default {
  title: 'Components/Form/Textarea',
  argTypes: {
    readonly: {
      control: { type: 'boolean' }
    }
  },
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

const Template = ({ ...args }) => {
  return createTextarea({ ...args });
};

export const Default = Template.bind({});
