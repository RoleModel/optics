import { createAnimation } from './Animation.js'

export default {
  title: 'Tokens/Animation',
  render: ({ speed, ...args }) => {
    return createAnimation({ speed, ...args })
  },
  argTypes: {
    speed: {
      control: { type: 'select' },
      options: ['input (120ms)', 'sidebar (200ms)', 'modal (300ms)', 'panel (400ms)'],
    },
  },
}

export const Default = {
  args: {
    speed: 'input (120ms)',
  },
}

export const Navigation = {
  args: {
    speed: 'navigation (200ms)',
  },
}

export const Sidebar = {
  args: {
    speed: 'sidebar (300ms)',
  },
}

export const Modal = {
  args: {
    speed: 'modal (300ms)',
  },
}

export const Panel = {
  args: {
    speed: 'panel (400ms)',
  },
}
