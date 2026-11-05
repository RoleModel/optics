import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'
import { Button } from '@/registry/optics/ui/button'
import { Flank } from '@/registry/optics/ui/flank'

const meta = {
  title: 'Layout/Flank',
  component: Flank,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    children: (
      <>
        <Avatar.Root size="medium">
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar.Root>
        <div className="op-stack gap-none">
          <strong>Jane Doe</strong>
          <span>The flanked block takes the remaining space.</span>
        </div>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    end: { control: 'boolean' },
    align: { control: 'select', options: [undefined, 'stretch', 'start', 'center', 'end', 'baseline'] },
    justify: { control: 'select', options: [undefined, 'start', 'center', 'end', 'between', 'around'] },
    gap: { control: 'select', options: [undefined, 'none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
    wrap: { control: 'boolean' },
    self: { control: 'select', options: [undefined, 'auto', 'start', 'center', 'end', 'stretch', 'baseline'] },
    grow: { control: 'boolean' },
  },
} satisfies Meta<typeof Flank>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const End: Story = {
  args: {
    end: true,
    children: (
      <>
        <span>A row of content with a trailing action</span>
        <Button size="small">Action</Button>
      </>
    ),
  },
}
