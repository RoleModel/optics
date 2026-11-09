import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Pagination } from '@/registry/optics/ui/pagination'
import { Table, TableContainer, type TableProps } from '@/registry/optics/ui/table'

const movies = [
  { title: 'Episode IV - A New Hope', year: 1977, trilogy: 'Original' },
  { title: 'Episode V - The Empire Strikes Back', year: 1980, trilogy: 'Original' },
  { title: 'Episode VI - The Return of the Jedi', year: 1983, trilogy: 'Original' },
  { title: 'Episode I - The Phantom Menace', year: 1999, trilogy: 'Prequel' },
  { title: 'Episode II - Attack of the Clones', year: 2002, trilogy: 'Prequel' },
  { title: 'Episode III - The Revenge of the Sith', year: 2005, trilogy: 'Prequel' },
  { title: 'Episode VII - The Force Awakens', year: 2015, trilogy: 'Sequel' },
  { title: 'Rogue One', year: 2016, trilogy: 'Anthology' },
  { title: 'Episode VIII - The Last Jedi', year: 2017, trilogy: 'Sequel' },
  { title: 'Solo', year: 2018, trilogy: 'Anthology' },
  { title: 'Episode IX - The Rise of Skywalker', year: 2019, trilogy: 'Sequel' },
]

type TableArgs = Pick<TableProps, 'variant' | 'layout' | 'density' | 'striped' | 'sticky'> & {
  checkbox: boolean
  height: boolean
  paginationInFooter: boolean
}

const meta = {
  title: 'Components/Table',
  parameters: { layout: 'padded' },
  args: {
    checkbox: false,
    height: false,
    paginationInFooter: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'danger'], description: 'Color of the header' },
    layout: {
      control: 'select',
      options: ['auto', 'fixed'],
      description: '`table-layout` of the table. Without one it is `auto`',
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Cell padding. Without one it is `default`',
    },
    striped: { control: 'select', options: ['even', 'odd'], description: 'Shade every even or odd row' },
    sticky: {
      control: 'select',
      options: ['header', 'footer', 'both'],
      description: 'Make the header, the footer, or both sticky',
    },
    checkbox: { control: 'boolean', description: 'Add a column of checkboxes' },
    height: {
      control: 'boolean',
      description: 'Wraps the table in a fixed-height `TableContainer` to demonstrate `sticky`',
    },
    paginationInFooter: { control: 'boolean', description: 'Put a `Pagination` in the table footer' },
  },
  render: ({ variant, layout, density, striped, sticky, checkbox, height, paginationInFooter }) => {
    const table = (
      <Table variant={variant} layout={layout} density={density} striped={striped} sticky={sticky}>
        <thead>
          <tr>
            {checkbox && (
              <th>
                <div className="flex items-center gap-sm">
                  <input type="checkbox" />
                  <span>Select</span>
                </div>
              </th>
            )}
            <th>Movie</th>
            <th>Year Released</th>
            <th>Trilogy</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.title}>
              {checkbox && (
                <th>
                  <input type="checkbox" />
                </th>
              )}
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.trilogy}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {paginationInFooter ? (
            <tr>
              <td colSpan={checkbox ? 4 : 3}>
                <div className="flex justify-end">
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
                    <Pagination.Link href="#">11</Pagination.Link>
                    <Pagination.Link href="#">12</Pagination.Link>
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
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              {checkbox && (
                <th>
                  <input type="checkbox" />
                </th>
              )}
              <td colSpan={2}>Total movies</td>
              <td>{movies.length}</td>
            </tr>
          )}
        </tfoot>
      </Table>
    )

    if (!height) return table

    return <TableContainer style={{ height: '20vh' }}>{table}</TableContainer>
  },
} satisfies Meta<TableArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Danger: Story = {
  args: { variant: 'danger' },
}

export const FixedLayout: Story = {
  args: { layout: 'fixed' },
}

export const ComfortableDensity: Story = {
  args: { density: 'comfortable' },
}

export const CompactDensity: Story = {
  args: { density: 'compact' },
}

export const StripedEven: Story = {
  args: { striped: 'even' },
}

export const StripedOdd: Story = {
  args: { striped: 'odd' },
}

export const StickyHeader: Story = {
  args: { sticky: 'header', height: true },
}

export const StickyFooter: Story = {
  args: { sticky: 'footer', height: true },
}

export const StickyBoth: Story = {
  args: { sticky: 'both', height: true },
}

export const PaginationInFooter: Story = {
  args: { sticky: 'footer', height: true, paginationInFooter: true },
}
