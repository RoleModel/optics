import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Pagination } from '@/registry/optics/ui/pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination.Root>
      <Pagination.Link href="#">
        <Icon name="chevron_left" />
        Prev
      </Pagination.Link>
      <Pagination.Link href="#" active>
        1
      </Pagination.Link>
      <Pagination.Link href="#">2</Pagination.Link>
      <Pagination.Link href="#">3</Pagination.Link>
      <Pagination.Divider />
      <Pagination.Link href="#">10</Pagination.Link>
      <Pagination.Link href="#">
        Next
        <Icon name="chevron_right" />
      </Pagination.Link>
    </Pagination.Root>
  ),
}

export const WithFirstAndLast: Story = {
  render: () => (
    <Pagination.Root>
      <Button
        size="small"
        borderless
        shape="square"
        nativeButton={false}
        render={<a href="#" aria-label="First page" />}
      >
        <Icon name="first_page" />
      </Button>
      <Pagination.Link href="#">1</Pagination.Link>
      <Pagination.Link href="#" active>
        2
      </Pagination.Link>
      <Pagination.Link href="#">3</Pagination.Link>
      <Button
        size="small"
        borderless
        shape="square"
        nativeButton={false}
        render={<a href="#" aria-label="Last page" />}
      >
        <Icon name="last_page" />
      </Button>
    </Pagination.Root>
  ),
}
