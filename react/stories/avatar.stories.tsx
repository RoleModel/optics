import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'

const imageUrl = 'https://picsum.photos/id/64/200/200'

const meta = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar.Root>
      <Avatar.Image src={imageUrl} alt="Jane Doe" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="op-cluster gap-md items-center">
      <Avatar.Root size="small">
        <Avatar.Image src={imageUrl} alt="Jane Doe" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="medium">
        <Avatar.Image src={imageUrl} alt="Jane Doe" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="large">
        <Avatar.Image src={imageUrl} alt="Jane Doe" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Avatar.Root size="large">
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Avatar.Root size="large" disabled>
      <Avatar.Image src={imageUrl} alt="Jane Doe" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
}
