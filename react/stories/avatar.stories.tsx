import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'

interface AvatarArgs {
  size: 'small' | 'medium' | 'large'
  disabled: boolean
  imageSource: string
  fallback: string
  useLink: boolean
}

const meta = {
  title: 'Components/Avatar',
  args: {
    size: 'large',
    disabled: false,
    imageSource: 'https://picsum.photos/id/1/400/400',
    fallback: 'JD',
    useLink: true,
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'], description: '`size` on `Avatar.Root`' },
    disabled: { control: 'boolean', description: '`disabled` on `Avatar.Root`' },
    imageSource: { control: 'text', description: '`src` of `Avatar.Image`. Clear it to see the fallback' },
    fallback: { control: 'text', description: 'Children of `Avatar.Fallback`, shown until the image loads' },
    useLink: { control: 'boolean', description: 'Render `Avatar.Root` as an `a` with `render`' },
  },
  render: ({ size, disabled, imageSource, fallback, useLink }) => (
    <Avatar.Root size={size} disabled={disabled || undefined} render={useLink ? <a href="#" /> : undefined}>
      <Avatar.Image src={imageSource} alt="Avatar" />
      <Avatar.Fallback>{fallback}</Avatar.Fallback>
    </Avatar.Root>
  ),
} satisfies Meta<AvatarArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Medium: Story = {
  args: { size: 'medium' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithoutLink: Story = {
  args: { useLink: false },
}
