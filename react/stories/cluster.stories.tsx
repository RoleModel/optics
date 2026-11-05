import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Cluster } from '@/registry/optics/ui/cluster'

const items = (
  <>
    <Badge variant="primary">Design</Badge>
    <Badge>Development</Badge>
    <Badge>Testing</Badge>
    <Badge>Deployment</Badge>
    <Badge>Support</Badge>
  </>
)

const meta = {
  title: 'Layout/Cluster',
  component: Cluster,
  tags: ['autodocs'],
  args: {
    children: items,
  },
  argTypes: {
    children: { control: false },
    align: { control: 'select', options: [undefined, 'stretch', 'start', 'center', 'end', 'baseline'] },
    justify: { control: 'select', options: [undefined, 'start', 'center', 'end', 'between', 'around'] },
    gap: { control: 'select', options: [undefined, 'none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
    wrap: { control: 'boolean' },
    self: { control: 'select', options: [undefined, 'auto', 'start', 'center', 'end', 'stretch', 'baseline'] },
    grow: { control: 'boolean' },
  },
} satisfies Meta<typeof Cluster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Gaps: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Cluster {...args} gap="none" />
      <Cluster {...args} gap="xs" />
      <Cluster {...args} gap="md" />
      <Cluster {...args} gap="xl" />
    </div>
  ),
}

export const Justify: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="op-stack gap-lg">
      <Cluster {...args} justify="start" />
      <Cluster {...args} justify="center" />
      <Cluster {...args} justify="end" />
      <Cluster {...args} justify="between" />
    </div>
  ),
}
