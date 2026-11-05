import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { ContentHeader } from '@/registry/optics/ui/content-header'

const meta = {
  title: 'Components/Content Header',
  component: ContentHeader.Root,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ContentHeader.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContentHeader.Root>
      <ContentHeader.Details>
        <ContentHeader.Context>Projects</ContentHeader.Context>
        <ContentHeader.Title>Website Redesign</ContentHeader.Title>
        <ContentHeader.Subline>Last updated 2 days ago</ContentHeader.Subline>
      </ContentHeader.Details>
      <ContentHeader.Aside>
        <Button>Share</Button>
        <Button variant="primary">Edit</Button>
      </ContentHeader.Aside>
    </ContentHeader.Root>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <ContentHeader.Root>
      <ContentHeader.Details>
        <ContentHeader.Title>Settings</ContentHeader.Title>
      </ContentHeader.Details>
    </ContentHeader.Root>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <ContentHeader.Root>
      <ContentHeader.Details>
        <ContentHeader.Title>Add details to sidebar documentation</ContentHeader.Title>
        <ContentHeader.Subline>Merged 1 commit into main from responsive-snippet</ContentHeader.Subline>
        <ContentHeader.Context>
          <Badge variant="primary" pill>
            Merged
          </Badge>
        </ContentHeader.Context>
      </ContentHeader.Details>
      <ContentHeader.Aside>
        <Button size="small">Edit</Button>
      </ContentHeader.Aside>
    </ContentHeader.Root>
  ),
}
