import { createButton } from './Button/Button.js'
import ButtonDocs from './Button/Button.mdx'

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    priority: {
      control: { type: 'select' },
      options: ['default', 'primary', 'delete', 'warning'],
    },
    noBorder: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    pill: { control: 'boolean' },
    icon: { control: 'boolean' },
    iconWithLabel: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
}

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args })
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  label: 'Default',
  priority: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  priority: 'primary',
}

export const Delete = Template.bind({})
Delete.args = {
  label: 'Delete',
  priority: 'delete',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning',
  priority: 'warning',
}

export const Active = Template.bind({})
Active.args = {
  label: 'Active',
  priority: 'primary',
  active: true,
}

export const NoBorder = Template.bind({})
NoBorder.args = {
  label: 'No Border',
  priority: 'primary',
  noBorder: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  priority: 'primary',
  disabled: true,
}

export const Pill = Template.bind({})
Pill.args = {
  label: 'Pill',
  priority: 'default',
  pill: true,
}

export const Icon = Template.bind({})
Icon.args = {
  label: '👍',
  priority: 'primary',
  icon: true,
}

export const IconWithLabel = Template.bind({})
IconWithLabel.args = {
  label: 'Label',
  priority: 'primary',
  iconWithLabel: true,
}

export const Size = Template.bind({})
Size.args = {
  label: 'Small',
  priority: 'primary',
  size: 'small',
}
