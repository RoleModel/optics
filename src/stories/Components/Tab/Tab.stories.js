import { createTab } from './Tab.js'

export default {
  title: 'Navigation Components/Tab',
  render: ({ option1, ...args }) => {
    return createTab({ option1, ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    activeTab: {
      control: { type: 'select' },
      options: ['USA', 'Mexico', 'Canada', 'England', 'Germany', 'Spain', 'Austria', 'Australia'],
    },
    disabledTab: {
      control: { type: 'select' },
      options: ['USA', 'Mexico', 'Canada', 'England', 'Germany', 'Spain', 'Austria', 'Australia'],
    },
  },
}

export const Default = {
  args: {},
}

export const Small = {
  args: {
    size: 'small',
  },
}
