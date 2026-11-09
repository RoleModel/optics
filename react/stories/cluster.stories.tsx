import type { Meta, StoryObj } from '@storybook/react-vite'

import { Cluster, type ClusterProps } from '@/registry/optics/ui/cluster'
import { alignArgType, boxes, gapArgType, itemsArgType, tallContainer } from './layout-helpers'

type ClusterArgs = Pick<ClusterProps, 'align' | 'gap'> & { items: number }

const meta = {
  title: 'Layout/Cluster',
  parameters: { layout: 'padded' },
  decorators: [tallContainer('15rem')],
  args: { items: 35 },
  argTypes: { items: itemsArgType(100), align: alignArgType, gap: gapArgType },
  render: ({ items, ...props }) => <Cluster {...props}>{boxes(items)}</Cluster>,
} satisfies Meta<ClusterArgs>

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
