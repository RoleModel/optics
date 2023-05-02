import { createButtonGroup, createButtonGroupToolbar } from './ButtonGroup/ButtonGroup.js'
import ButtonGroupDocs from './ButtonGroup/ButtonGroup.mdx'

export default {
  title: 'Components/ButtonGroup',
  argTypes: {
    priority: {
      control: { type: 'select' },
      options: ['default', 'primary', 'delete', 'warning'],
    },
    noBorder: { control: 'boolean' },
    active: { control: 'boolean' },
    pill: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    segmentedPreview: {
      control: 'boolean',
      description: 'This is not a class. It just provides an example of creating a segmented control showing the currently active piece.',
    },
  },
  parameters: {
    docs: {
      page: ButtonGroupDocs,
    },
  },
}

const Template = ({ ...args }) => {
  return createButtonGroup({ ...args })
}

const TemplateTwo = ({ ...args }) => {
  return createButtonGroupToolbar({ ...args })
}

export const Default = Template.bind({})
Default.args = {
  priority: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  priority: 'primary',
}

export const Delete = Template.bind({})
Delete.args = {
  priority: 'delete',
}

export const Warning = Template.bind({})
Warning.args = {
  priority: 'warning',
}

export const Active = Template.bind({})
Active.args = {
  priority: 'delete',
  active: true,
}

export const NoBorder = Template.bind({})
NoBorder.args = {
  priority: 'primary',
  noBorder: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  priority: 'primary',
  disabled: true,
}

export const Pill = Template.bind({})
Pill.args = {
  priority: 'default',
  pill: true,
}

export const Size = Template.bind({})
Size.args = {
  priority: 'primary',
  size: 'small',
}

export const Toolbar = TemplateTwo.bind({})
Toolbar.args = {}
