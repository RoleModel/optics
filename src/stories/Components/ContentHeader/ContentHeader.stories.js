import { createContentHeader } from './ContentHeader.js'

export default {
  title: 'Content Components/Content Header',
  render: ({ title, ...args }) => {
    return createContentHeader({ title, ...args })
  },
  argTypes: {
    title: { control: 'text' },
    showContext: { control: 'boolean' },
    contextLabel: { if: { arg: 'showContext' }, control: 'text' },
    showSubline: { control: 'boolean' },
    sublineLabel: { if: { arg: 'showSubline' }, control: 'text' },
    showAside: { control: 'boolean' },
    asideExample: {
      if: { arg: 'showAside' },
      control: { type: 'select' },
      options: ['actions', 'text'],
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export const Default = {
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
    showSubline: true,
    sublineLabel: 'Subline Label',
    showAside: true,
    asideExample: 'actions',
  },
}

export const WithContext = {
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
  },
}

export const WithSubline = {
  args: {
    title: 'Content Header',
    showSubline: true,
    sublineLabel: 'Subline Label',
  },
}

export const WithAside = {
  args: {
    title: 'Content Header',
    showAside: true,
    asideExample: 'actions',
  },
}

export const Simple = {
  args: {
    title: 'Only a Title',
    showAside: true,
    asideExample: 'actions',
  },
}

export const GitHub = {
  args: {
    githubExample: true,
  },
}
