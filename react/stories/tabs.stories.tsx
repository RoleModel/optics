import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@/registry/optics/ui/tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="billing" disabled>
          Billing
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Workspace stats and recent activity.</Tabs.Panel>
      <Tabs.Panel value="projects">Milestones and deadlines.</Tabs.Panel>
      <Tabs.Panel value="billing">Invoices and payment methods.</Tabs.Panel>
      <Tabs.Panel value="account">Profile and preferences.</Tabs.Panel>
    </Tabs.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="op-stack gap-lg">
      <Tabs.Root defaultValue="one">
        <Tabs.List size="small">
          <Tabs.Tab value="one">Small</Tabs.Tab>
          <Tabs.Tab value="two">Tab two</Tabs.Tab>
          <Tabs.Tab value="three">Tab three</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>
      <Tabs.Root defaultValue="one">
        <Tabs.List size="large">
          <Tabs.Tab value="one">Large</Tabs.Tab>
          <Tabs.Tab value="two">Tab two</Tabs.Tab>
          <Tabs.Tab value="three">Tab three</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>
    </div>
  ),
}

export const NavLinks: Story = {
  render: () => (
    <Tabs.Nav aria-label="Account">
      <Tabs.Link href="#" active>
        Profile
      </Tabs.Link>
      <Tabs.Link href="#">Security</Tabs.Link>
      <Tabs.Link href="#" disabled>
        Billing
      </Tabs.Link>
      <Tabs.Link href="#">Notifications</Tabs.Link>
    </Tabs.Nav>
  ),
}
