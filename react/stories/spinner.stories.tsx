import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@/registry/optics/ui/spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large'],
      description: 'Size modifier. Without one the spinner is large',
    },
    label: { control: 'text', description: 'Screen reader text inside the spinner, default `Loading`' },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const XSmall: Story = {
  args: { size: 'x-small' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const Medium: Story = {
  args: { size: 'medium' },
}

export const Large: Story = {
  args: { size: 'large' },
}
