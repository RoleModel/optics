import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack, type StackProps } from '@/registry/optics/ui/stack'
import { alignArgType, boxes, gapArgType, itemsArgType, tallContainer } from './layout-helpers'

type StackArgs = Pick<StackProps, 'align' | 'gap'> & { items: number }

const meta = {
  title: 'Layout/Stack',
  parameters: { layout: 'padded' },
  decorators: [tallContainer('15rem')],
  args: { items: 5 },
  argTypes: { items: itemsArgType(100), align: alignArgType, gap: gapArgType },
  render: ({ items, ...props }) => <Stack {...props}>{boxes(items)}</Stack>,
} satisfies Meta<StackArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Without: Story = {
  render: ({ items }) => <div>{boxes(items)}</div>,
}

export const AlignStretch: Story = {
  args: { align: 'stretch' },
}

export const AlignStart: Story = {
  args: { align: 'start' },
}

export const AlignCenter: Story = {
  args: { align: 'center' },
}

export const AlignEnd: Story = {
  args: { align: 'end' },
}

export const AlignBaseline: Story = {
  args: { align: 'baseline' },
}
