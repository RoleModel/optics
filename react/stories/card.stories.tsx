import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/registry/optics/ui/card'

interface CardArgs {
  label: string
  padded: boolean
  condensed: boolean
  header: string
  body: string
  footer: string
  shadow: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
}

const meta = {
  title: 'Components/Card',
  args: {
    label: 'Plain',
    padded: false,
    condensed: false,
    header: '',
    body: '',
    footer: '',
    shadow: 'none',
  },
  argTypes: {
    label: { control: 'text', description: 'Children of `Card.Root` when it has no sections' },
    padded: { control: 'boolean', description: '`padded` on `Card.Root`' },
    condensed: { control: 'boolean', description: '`condensed` on `Card.Root`' },
    header: { control: 'text', description: 'Children of `Card.Header`. Leave empty to omit it' },
    body: { control: 'text', description: 'Children of `Card.Body`. Leave empty to omit it' },
    footer: { control: 'text', description: 'Children of `Card.Footer`. Leave empty to omit it' },
    shadow: {
      control: 'select',
      options: ['none', 'x-small', 'small', 'medium', 'large', 'x-large'],
      description: '`shadow` on `Card.Root`',
    },
  },
  render: ({ label, padded, condensed, header, body, footer, shadow }) => (
    <Card.Root
      padded={padded || undefined}
      condensed={condensed || undefined}
      shadow={shadow === 'none' ? undefined : shadow}
    >
      {header || body || footer ? null : label}
      {header ? <Card.Header>{header}</Card.Header> : null}
      {body ? <Card.Body>{body}</Card.Body> : null}
      {footer ? <Card.Footer>{footer}</Card.Footer> : null}
    </Card.Root>
  ),
} satisfies Meta<CardArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Padded: Story = {
  args: { label: 'Padded', padded: true },
}

export const Full: Story = {
  args: { header: 'Full', body: 'Body', footer: 'Footer' },
}

export const Condensed: Story = {
  args: { condensed: true, header: 'Condensed', body: 'Body', footer: 'Footer' },
}

export const Shadow: Story = {
  args: { label: 'Shadow', padded: true, shadow: 'large' },
}
