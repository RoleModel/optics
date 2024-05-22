import { createPagination } from './Pagination.js'

export default {
  title: 'Navigation Components/Pagination',
  render: ({ option1, ...args }) => {
    return createPagination({ option1, ...args })
  },
  argTypes: {
    activePage: {
      control: { type: 'select' },
      options: ['1', '2', '3', '10', '11', '12'],
    },
    includeShowing: { control: 'boolean' },
  },
}

export const Default = {
  args: {},
}

export const WithShowing = {
  args: {
    includeShowing: true,
  },
}
