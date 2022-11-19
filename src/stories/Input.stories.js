import { createInput } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

export default {
  title: 'Components/Form/Input',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password', 'tel', 'checkbox', 'radio', 'color', 'date'],
    },
    readonly: {
      control: { type: 'boolean' }
    },
    indeterminate: {
      control: { type: 'boolean' },
      if: { arg: 'type', eq: 'checkbox' },
    }
  },
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

const Template = ({ type, ...args }) => {
  return createInput({ type, ...args });
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
};

export const Color = Template.bind({});
Color.args = {
  type: 'color',
};
