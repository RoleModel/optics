import { createCluster } from './Cluster.js'

export default {
  title: 'Utilities/Cluster',
  render: ({ cluster, ...args }) => {
    return createCluster({ cluster, ...args })
  },
  argTypes: {
    cluster: { control: 'boolean' },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
    },
    gap: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    cluster: true,
  },
}

export const Without = {
  args: {
    cluster: false,
  },
}

export const AlignStretch = {
  args: {
    alignItems: 'stretch',
  },
}

export const AlignStart = {
  args: {
    alignItems: 'start',
  },
}

export const AlignCenter = {
  args: {
    alignItems: 'center',
  },
}

export const AlignEnd = {
  args: {
    alignItems: 'end',
  },
}

export const AlignBaseline = {
  args: {
    alignItems: 'baseline',
  },
}
