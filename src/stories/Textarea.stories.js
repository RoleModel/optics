import { createTextarea } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

export default {
  title: 'Components/Form/Textarea',
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

const Template = () => {
  return createTextarea();
};

export const Default = Template.bind({});
