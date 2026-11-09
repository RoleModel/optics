import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from '@/registry/optics/ui/breadcrumbs'
import { Icon } from '@/registry/optics/ui/icon'

interface BreadcrumbsArgs {
  size?: 'small' | 'large'
  separator: string
}

const meta = {
  title: 'Components/Breadcrumbs',
  args: {
    separator: 'arrow_right',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: '`size` on `Breadcrumbs.Root`. Small when unset',
    },
    separator: {
      control: 'text',
      description: 'Icon inside each `Breadcrumbs.Separator`, a Material Symbols icon. Default `arrow_right`',
    },
  },
  render: ({ size, separator }) => {
    const separatorIcon = separator === 'arrow_right' ? undefined : <Icon name={separator} />

    return (
      <Breadcrumbs.Root size={size}>
        <Breadcrumbs.Link href="#">USA</Breadcrumbs.Link>
        <Breadcrumbs.Separator>{separatorIcon}</Breadcrumbs.Separator>
        <Breadcrumbs.Link href="#">Mexico</Breadcrumbs.Link>
        <Breadcrumbs.Separator>{separatorIcon}</Breadcrumbs.Separator>
        <Breadcrumbs.Link href="#">Canada</Breadcrumbs.Link>
        <Breadcrumbs.Separator>{separatorIcon}</Breadcrumbs.Separator>
        <Breadcrumbs.Text>England</Breadcrumbs.Text>
      </Breadcrumbs.Root>
    )
  },
} satisfies Meta<BreadcrumbsArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Large: Story = {
  args: { size: 'large' },
}

export const SeparatorIcon: Story = {
  args: { separator: 'folder' },
}
