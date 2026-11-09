import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Form } from '@/registry/optics/ui/form'
import { Icon } from '@/registry/optics/ui/icon'
import { Pagination } from '@/registry/optics/ui/pagination'

const pages = ['1', '2', '3', '...', '10', '11', '12']

interface PaginationArgs {
  activePage: string
  includeShowing: boolean
}

const meta = {
  title: 'Components/Pagination',
  args: {
    activePage: '1',
    includeShowing: false,
  },
  argTypes: {
    activePage: {
      control: 'select',
      options: pages.filter((page) => page !== '...'),
      description: 'The `Pagination.Link` with `active`',
    },
    includeShowing: { control: 'boolean', description: 'Add a `Form.Group` with a select for the page size' },
  },
  render: ({ activePage, includeShowing }) => (
    <Pagination.Root>
      {includeShowing && (
        <Form.Group>
          <Form.Label>Showing</Form.Label>
          <Form.Select noBorder size="small">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
      )}
      <Button
        size="small"
        borderless
        shape="square"
        nativeButton={false}
        render={<a href="#" aria-label="First page" />}
      >
        <Icon name="first_page" />
      </Button>
      <Pagination.Link href="#">
        <Icon name="chevron_left" />
        Prev
      </Pagination.Link>
      {pages.map((page) =>
        page === '...' ? (
          <Pagination.Divider key={page} />
        ) : (
          <Pagination.Link key={page} href="#" active={activePage === page || undefined}>
            {page}
          </Pagination.Link>
        )
      )}
      <Pagination.Link href="#">
        Next
        <Icon name="chevron_right" />
      </Pagination.Link>
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
} satisfies Meta<PaginationArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithShowing: Story = {
  args: { includeShowing: true },
}
