import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@/registry/optics/ui/table'

const movies = [
  { title: 'Episode IV - A New Hope', year: 1977, trilogy: 'Original' },
  { title: 'Episode V - The Empire Strikes Back', year: 1980, trilogy: 'Original' },
  { title: 'Episode VI - Return of the Jedi', year: 1983, trilogy: 'Original' },
  { title: 'Episode I - The Phantom Menace', year: 1999, trilogy: 'Prequel' },
  { title: 'Episode VII - The Force Awakens', year: 2015, trilogy: 'Sequel' },
  { title: 'Rogue One', year: 2016, trilogy: 'Anthology' },
]

const rows = (
  <>
    <thead>
      <tr>
        <th>Movie</th>
        <th>Year Released</th>
        <th>Trilogy</th>
      </tr>
    </thead>
    <tbody>
      {movies.map((movie) => (
        <tr key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.year}</td>
          <td>{movie.trilogy}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={2}>Total movies</td>
        <td>{movies.length}</td>
      </tr>
    </tfoot>
  </>
)

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    children: rows,
  },
  argTypes: {
    children: { control: false },
    variant: { control: 'select', options: [undefined, 'primary', 'danger'] },
    layout: { control: 'select', options: [undefined, 'auto', 'fixed'] },
    density: { control: 'select', options: [undefined, 'default', 'comfortable', 'compact'] },
    striped: { control: 'select', options: [undefined, 'even', 'odd'] },
    sticky: { control: 'select', options: [undefined, 'header', 'footer', 'both'] },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Table {...args} variant="primary" />
      <Table {...args} variant="danger" />
    </div>
  ),
}

export const Density: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Table {...args} density="compact" />
      <Table {...args} density="default" />
      <Table {...args} density="comfortable" />
    </div>
  ),
}

export const Striped: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Table {...args} striped="even" />
      <Table {...args} striped="odd" />
    </div>
  ),
}

export const FixedLayout: Story = {
  args: { layout: 'fixed' },
}
