import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: { control: 'select', options: [undefined, 'primary', 'destructive', 'warning'] },
    size: { control: 'select', options: [undefined, 'small', 'medium', 'large'] },
    shape: { control: 'select', options: [undefined, 'pill', 'circle', 'square'] },
    active: { control: 'boolean' },
    borderless: { control: 'boolean' },
    iconWithLabel: { control: 'boolean' },
    withBadge: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Button {...args}>Default</Button>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="warning">
        Warning
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
}

export const Shapes: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Button {...args} shape="pill">
        Pill
      </Button>
      <Button {...args} shape="circle" aria-label="Favorite">
        <Icon name="star" />
      </Button>
      <Button {...args} shape="square" aria-label="Favorite">
        <Icon name="star" />
      </Button>
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Button {...args} active>
        Active
      </Button>
      <Button {...args} borderless>
        Borderless
      </Button>
      <Button {...args} iconWithLabel>
        <Icon name="star" />
        Icon with label
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <Button {...args} nativeButton={false} render={<a href="#" />}>
      Link styled as a button
    </Button>
  ),
}
