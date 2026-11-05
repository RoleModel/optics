import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/registry/optics/ui/accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion.Root,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Accordion.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>What is Optics?</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>RoleModel's design system, providing tokens, utilities, and components.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>Can I customize it?</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>Every component exposes CSS custom properties you can override.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const Exclusive: Story = {
  render: () => (
    <Accordion.Root name="accordion-exclusive">
      <Accordion.Item open>
        <Accordion.Trigger>
          <Accordion.Label>First</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>Items sharing a name close each other when opened.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>Second</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>Opening this one closes the first.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>Third</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>Only one item is open at a time.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const CustomMarker: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>Custom marker icon</Accordion.Label>
          <Accordion.Marker name="expand_more" />
        </Accordion.Trigger>
        <Accordion.Content>The marker accepts any icon name.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const DisableAnimation: Story = {
  render: () => (
    <Accordion.Root disableAnimation>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Label>Animation disabled</Accordion.Label>
          <Accordion.Marker />
        </Accordion.Trigger>
        <Accordion.Content>This item opens and closes instantly.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}
