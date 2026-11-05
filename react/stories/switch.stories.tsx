import type { Meta, StoryObj } from '@storybook/react-vite'

import { Form } from '@/registry/optics/ui/form'
import { Switch } from '@/registry/optics/ui/switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Toggle',
  },
  argTypes: {
    size: { control: 'select', options: [undefined, 'small', 'large'] },
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="op-stack gap-md">
      <div className="op-cluster gap-md">
        <Switch {...args} size="small" />
        <Switch {...args} size="small" defaultChecked />
      </div>
      <div className="op-cluster gap-md">
        <Switch {...args} size="large" />
        <Switch {...args} size="large" defaultChecked />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Switch {...args} disabled />
      <Switch {...args} disabled defaultChecked />
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <Form.Group inline>
      <Switch {...args} aria-label={undefined} id="switch-with-label" />
      <Form.Label htmlFor="switch-with-label">Email notifications</Form.Label>
    </Form.Group>
  ),
}
