import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@/registry/optics/ui/divider'
import { SidePanel } from '@/registry/optics/ui/side-panel'

const meta = {
  title: 'Components/Side Panel',
  component: SidePanel.Root,
  tags: ['autodocs'],
  // The panel fills its container's height; the wrapper stands in for a page layout.
  decorators: [
    (Story) => (
      <div style={{ blockSize: '24rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidePanel.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidePanel.Root>
      <SidePanel.Header>Filters</SidePanel.Header>
      <SidePanel.Body>
        <SidePanel.Section>Status</SidePanel.Section>
        <Divider />
        <SidePanel.Section>Owner</SidePanel.Section>
        <Divider />
        <SidePanel.Section>Due date</SidePanel.Section>
        <Divider />
        <SidePanel.Section>Tags</SidePanel.Section>
      </SidePanel.Body>
      <SidePanel.Footer>Footer</SidePanel.Footer>
    </SidePanel.Root>
  ),
}

export const Padded: Story = {
  render: () => (
    <SidePanel.Root>
      <SidePanel.Header padding="all">Padded header</SidePanel.Header>
      <SidePanel.Body>
        <SidePanel.Section padding="all">Padded section</SidePanel.Section>
        <Divider />
        <SidePanel.Section padding="x">Padded x only</SidePanel.Section>
        <Divider />
        <SidePanel.Section padding="y">Padded y only</SidePanel.Section>
      </SidePanel.Body>
      <SidePanel.Footer padding="all">Padded footer</SidePanel.Footer>
    </SidePanel.Root>
  ),
}

export const Borders: Story = {
  render: () => (
    <div className="op-cluster gap-lg items-stretch">
      <SidePanel.Root border="left">
        <SidePanel.Header padding="all">Left border</SidePanel.Header>
      </SidePanel.Root>
      <SidePanel.Root border="right">
        <SidePanel.Header padding="all">Right border</SidePanel.Header>
      </SidePanel.Root>
      <SidePanel.Root border="both">
        <SidePanel.Header padding="all">Both borders</SidePanel.Header>
      </SidePanel.Root>
    </div>
  ),
}
