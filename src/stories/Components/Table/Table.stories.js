import { createTable } from './Table.js'

export default {
  title: 'Components/Table',
  render: ({ ...args }) => {
    return createTable({ ...args })
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'primary', 'danger'],
    },
    layout: {
      control: { type: 'select' },
      options: ['auto', 'fixed'],
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
    },
    striped: {
      control: { type: 'select' },
      options: ['off', 'even', 'odd'],
    },
    sticky: {
      control: { type: 'select' },
      options: ['off', 'header', 'footer', 'both'],
    },
    checkbox: {
      control: 'boolean',
    },
    height: {
      control: 'boolean',
      description: 'This is not a class. It just provides a fixed height to demonstrate the sticky classes',
    },
    paginationInFooter: {
      control: 'boolean',
      description: 'An example of using the pagination component in the footer of the table',
    },
  },
}

export const Default = {
  args: {},
}

export const Primary = {
  args: {
    style: 'primary',
  },
}

export const Danger = {
  args: {
    style: 'danger',
  },
}

export const FixedLayout = {
  args: {
    layout: 'fixed',
  },
}

export const ComfortableDensity = {
  args: {
    density: 'comfortable',
  },
}

export const CompactDensity = {
  args: {
    density: 'compact',
  },
}

export const StripedEven = {
  args: {
    striped: 'even',
  },
}

export const StripedOdd = {
  args: {
    striped: 'odd',
  },
}

export const StickyHeader = {
  args: {
    sticky: 'header',
    height: true,
  },
}

export const StickyFooter = {
  args: {
    sticky: 'footer',
    height: true,
  },
}

export const StickyBoth = {
  args: {
    sticky: 'both',
    height: true,
  },
}

export const PaginationInFooter = {
  args: {
    sticky: 'footer',
    height: true,
    paginationInFooter: true,
  },
}
