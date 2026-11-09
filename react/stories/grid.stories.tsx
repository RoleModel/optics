import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, type GridProps } from '@/registry/optics/ui/grid'
import { boxes, gapArgType, itemsArgType, tallContainer } from './layout-helpers'

type GridArgs = Pick<GridProps, 'columns' | 'gap'> & { items: number }

const meta = {
  title: 'Layout/Grid',
  parameters: { layout: 'padded' },
  decorators: [tallContainer('10rem')],
  args: {
    items: 10,
  },
  argTypes: {
    items: itemsArgType(50),
    columns: {
      control: 'select',
      options: [2, 3, 4, 5, 6],
      description:
        'Divide the grid into this many even columns: `op-grid--*-column`. Without it, columns fit a minimum size',
    },
    gap: gapArgType,
  },
  render: ({ items, ...props }) => <Grid {...props}>{boxes(items)}</Grid>,
} satisfies Meta<GridArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Without: Story = {
  render: ({ items }) => <div>{boxes(items)}</div>,
}

export const TwoColumns: Story = {
  args: { columns: 2 },
}

export const ThreeColumns: Story = {
  args: { columns: 3 },
}

export const FourColumns: Story = {
  args: { columns: 4 },
}

export const FiveColumns: Story = {
  args: { columns: 5 },
}

export const SixColumns: Story = {
  args: { columns: 6 },
}

export const Gap: Story = {
  args: { gap: 'xl' },
}
