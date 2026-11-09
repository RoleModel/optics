import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { ContentHeader } from '@/registry/optics/ui/content-header'
import { Icon } from '@/registry/optics/ui/icon'

interface ContentHeaderArgs {
  title: string
  showContext: boolean
  contextLabel: string
  showSubline: boolean
  sublineLabel: string
  showAside: boolean
  asideExample: 'actions' | 'text'
}

const meta = {
  title: 'Components/Content Header',
  parameters: { layout: 'padded' },
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
    showSubline: true,
    sublineLabel: 'Subline Label',
    showAside: true,
    asideExample: 'actions',
  },
  argTypes: {
    title: { control: 'text', description: 'Children of `ContentHeader.Title`' },
    showContext: { control: 'boolean', description: 'Add `ContentHeader.Context` above the title' },
    contextLabel: {
      control: 'text',
      if: { arg: 'showContext' },
      description: 'Children of `ContentHeader.Context`',
    },
    showSubline: { control: 'boolean', description: 'Add `ContentHeader.Subline` below the title' },
    sublineLabel: {
      control: 'text',
      if: { arg: 'showSubline' },
      description: 'Children of `ContentHeader.Subline`',
    },
    showAside: { control: 'boolean', description: 'Add `ContentHeader.Aside`' },
    asideExample: {
      control: 'select',
      options: ['actions', 'text'],
      if: { arg: 'showAside' },
      description: 'Content of `ContentHeader.Aside`: buttons or text',
    },
  },
  render: ({ title, showContext, contextLabel, showSubline, sublineLabel, showAside, asideExample }) => (
    <ContentHeader.Root>
      <ContentHeader.Details>
        {showContext && <ContentHeader.Context>{contextLabel}</ContentHeader.Context>}
        <ContentHeader.Title>{title}</ContentHeader.Title>
        {showSubline && <ContentHeader.Subline>{sublineLabel}</ContentHeader.Subline>}
      </ContentHeader.Details>
      {showAside && (
        <ContentHeader.Aside>
          {asideExample === 'actions' ? (
            <>
              <Button>Action 1</Button>
              <Button>Action 2</Button>
            </>
          ) : (
            <p>Aside text example</p>
          )}
        </ContentHeader.Aside>
      )}
    </ContentHeader.Root>
  ),
} satisfies Meta<ContentHeaderArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithContext: Story = {
  args: { showSubline: false, showAside: false },
}

export const WithSubline: Story = {
  args: { showContext: false, showAside: false },
}

export const WithAside: Story = {
  args: { showContext: false, showSubline: false },
}

export const Simple: Story = {
  args: { title: 'Only a Title', showContext: false, showSubline: false },
}

export const GitHub: Story = {
  render: () => (
    <ContentHeader.Root>
      <ContentHeader.Details>
        <ContentHeader.Title>Add details to sidebar documentation #265</ContentHeader.Title>
        <ContentHeader.Subline>
          <div className="op-cluster gap-xxs items-center">
            <Badge variant="primary" pill>
              <Icon name="graph_1" />
              Merged
            </Badge>
            <strong>Jeremy-Walton</strong>
            <span>merged 1 commit into</span>
            <Badge>main</Badge>
            <span>from</span>
            <Badge>responsive-snippet</Badge>
            <Button size="small" shape="square" borderless aria-label="Copy branch name">
              <Icon name="content_copy" />
            </Button>
            <span>on Jan 31</span>
          </div>
        </ContentHeader.Subline>
      </ContentHeader.Details>
      <ContentHeader.Aside>
        <Button size="small">Edit</Button>
        <Button size="small">
          <Icon name="code" />
          Code
          <Icon name="arrow_drop_down" />
        </Button>
      </ContentHeader.Aside>
    </ContentHeader.Root>
  ),
}
