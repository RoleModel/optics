import { createFormGroup } from './Form/Form.js';
import FormDocs from './Form/Form.mdx';

import * as LabelStories from './Label.stories';
import * as InputStories from './Input.stories';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/FormGroup',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    ...LabelStories.default.argTypes,
    ...InputStories.default.argTypes,
    error: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    }
  },
  parameters: {
    docs: {
      page: FormDocs
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  return createFormGroup({ ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
};

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Radio.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
  type: 'radio'
};

export const Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Checkbox.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
  type: 'checkbox'
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Error.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
  error: "Can't be blank"
};

export const Hint = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Hint.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
  hint: 'Very helpful hint'
};

export const Readonly = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Readonly.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
  readonly: true
};
