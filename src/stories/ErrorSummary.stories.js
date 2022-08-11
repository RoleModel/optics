import { createErrorSummary } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

export default {
  title: 'Components/Form/ErrorSummary',
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

const Template = ({ label, ...args }) => {
  return createErrorSummary({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: '2 errors prohibited this from being saved',
};
