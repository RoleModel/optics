import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Stack } from '@/registry/optics/ui/stack'

const items = (
  <>
    <Badge variant="primary">One</Badge>
    <Badge>Two</Badge>
    <Badge>Three</Badge>
  </>
)

const meta = {
  title: 'Layout/Stack',
  component: Stack,
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
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Gaps: Story = {
  render: (args) => (
    <div className="op-cluster gap-xl items-start">
      <Stack {...args} gap="none" />
      <Stack {...args} gap="xs" />
      <Stack {...args} gap="md" />
      <Stack {...args} gap="xl" />
    </div>
  ),
}

export const Alignment: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="op-stack gap-lg">
      <Stack {...args} align="start" />
      <Stack {...args} align="center" />
      <Stack {...args} align="end" />
    </div>
  ),
}
