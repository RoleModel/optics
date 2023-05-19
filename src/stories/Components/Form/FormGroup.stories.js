import { createFormGroup } from './Form.js'

import * as LabelStories from './Label.stories'
import * as InputStories from './Input.stories'

export default {
  title: 'Components/Form/FormGroup',
  render: ({ ...args }) => {
    return createFormGroup({ ...args })
  },
  argTypes: {
    ...LabelStories.default.argTypes,
    ...InputStories.default.argTypes,
    error: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    },
  },
}

// // More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
// const Template = ({ ...args }) => {
//   return createFormGroup({ ...args })
// }

export const Default = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
  },
}

export const Radio = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    type: 'Radio',
  },
}

export const Checkbox = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    type: 'Checkbox',
  },
}

export const IndeterminateCheckbox = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    type: 'Checkbox',
    indeterminate: true,
  },
}

export const Error = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    error: "Can't be blank",
  },
}

export const Hint = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    hint: 'Very helpful hint',
  },
}

export const Readonly = {
  args: {
    ...LabelStories.Default.args,
    ...InputStories.Default.args,
    readonly: true,
  },
}
