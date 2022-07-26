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
    inline: {
      control: { type: 'boolean' },
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

export const FormGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
FormGroup.args = {
  ...LabelStories.Default.args,
  ...InputStories.Default.args,
};
