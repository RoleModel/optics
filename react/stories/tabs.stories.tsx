import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@/registry/optics/ui/tabs'

const countries = ['USA', 'Mexico', 'Canada', 'England', 'Germany', 'Spain', 'Austria', 'Australia']

interface TabsArgs {
  size?: 'small' | 'large'
  activeTab: string
  disabledTab?: string
  panels: boolean
}

const meta = {
  title: 'Components/Tabs',
  args: {
    activeTab: 'USA',
    disabledTab: 'Canada',
    panels: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: '`size` of `Tabs.Nav` or `Tabs.List`. Without one the tabs are large',
    },
    activeTab: {
      control: 'select',
      options: countries,
      description: 'The tab with `active` (links), or the `defaultValue` of `Tabs.Root` (panels)',
    },
    disabledTab: {
      control: 'select',
      options: countries,
      description: 'The tab with `disabled`',
    },
    panels: {
      control: 'boolean',
      description: 'Use `Tabs.Root`, `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel` instead of `Tabs.Nav` and `Tabs.Link`',
    },
  },
  render: ({ size, activeTab, disabledTab, panels }) => {
    if (panels) {
      return (
        <Tabs.Root defaultValue={activeTab}>
          <Tabs.List size={size}>
            {countries.map((country) => (
              <Tabs.Tab key={country} value={country} disabled={country === disabledTab || undefined}>
                {country}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {countries.map((country) => (
            <Tabs.Panel key={country} value={country}>
              <p>Content for {country}</p>
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      )
    }

    return (
      <Tabs.Nav size={size}>
        {countries.map((country) => (
          <Tabs.Link
            key={country}
            href="#"
            active={country === activeTab || undefined}
            disabled={country === disabledTab || undefined}
          >
            {country}
          </Tabs.Link>
        ))}
      </Tabs.Nav>
    )
  },
} satisfies Meta<TabsArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small' },
}

export const Panels: Story = {
  args: { panels: true },
}
