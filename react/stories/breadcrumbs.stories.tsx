import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from '@/registry/optics/ui/breadcrumbs'
import { Icon } from '@/registry/optics/ui/icon'

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Link href="#">Projects</Breadcrumbs.Link>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Text>Optics</Breadcrumbs.Text>
    </Breadcrumbs.Root>
  ),
}

export const Large: Story = {
  render: () => (
    <Breadcrumbs.Root size="large">
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Link href="#">Projects</Breadcrumbs.Link>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Text>Optics</Breadcrumbs.Text>
    </Breadcrumbs.Root>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
      <Breadcrumbs.Link href="#">Projects</Breadcrumbs.Link>
      <Breadcrumbs.Separator>
        <Icon name="double_arrow" />
      </Breadcrumbs.Separator>
      <Breadcrumbs.Text>Optics</Breadcrumbs.Text>
    </Breadcrumbs.Root>
  ),
}
