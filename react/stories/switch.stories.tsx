import type { Meta, StoryObj } from '@storybook/react-vite'

import { Form } from '@/registry/optics/ui/form'
import { Switch } from '@/registry/optics/ui/switch'

interface SwitchArgs {
  label: string
  size?: 'small' | 'large'
  disabled: boolean
}

const meta = {
  title: 'Components/Switch',
  args: {
    label: 'Switch Text',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Text of the `Form.Label` linked to the switch' },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: '`size` of `Switch`. Without one the switch is large',
    },
    disabled: { control: 'boolean', description: '`disabled` on `Switch`' },
  },
  render: ({ label, size, disabled }, { id }) => {
    // Each story needs its own id so the label toggles the right switch on the docs page.
    const switchId = `switch-${id.split('--')[1]}`

    return (
      <Form.Group inline>
        <Switch id={switchId} size={size} disabled={disabled || undefined} />
        <Form.Label htmlFor={switchId}>{label}</Form.Label>
      </Form.Group>
    )
  },
} satisfies Meta<SwitchArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Large: Story = {
  args: { size: 'large' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
