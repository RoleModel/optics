import { createCard } from './Card.js'

export default {
  title: 'Content Components/Card',
  render: ({ label, ...args }) => {
    return createCard({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    padded: { control: 'boolean' },
    condensed: { control: 'boolean' },
    header: { control: 'text' },
    body: { control: 'text' },
    footer: { control: 'text' },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'x-small', 'small', 'medium', 'large', 'x-large'],
    },
  },
}

export const Plain = {
  args: {
    label: 'Plain',
  },
}

export const Padded = {
  args: {
    padded: true,
    label: 'Padded',
  },
}

export const Full = {
  args: {
    header: 'Full',
    body: 'Body',
    footer: 'Footer',
  },
}

export const Condensed = {
  args: {
    condensed: true,
    header: 'Condensed',
    body: 'Body',
    footer: 'Footer',
  },
}

export const Shadow = {
  args: {
    shadow: 'large',
    padded: true,
    label: 'Shadow',
  },
}
