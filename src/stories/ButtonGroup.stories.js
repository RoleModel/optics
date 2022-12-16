import { createButtonGroup, createButtonGroupToolbar } from './ButtonGroup/ButtonGroup.js'
import ButtonGroupDocs from './ButtonGroup/ButtonGroup.mdx'

export default {
  title: 'Components/ButtonGroup',
  argTypes: {
    priority: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'delete'],
    },
    noBorder: { control: 'boolean' },
    outlined: { control: 'boolean' },
    pill: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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

export const Secondary = Template.bind({})
Secondary.args = {
  priority: 'secondary',
}

export const Delete = Template.bind({})
Delete.args = {
  priority: 'delete',
}

export const Outline = Template.bind({})
Outline.args = {
  priority: 'delete',
  outlined: true,
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
