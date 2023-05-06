import { createAnimation } from './Animation/Animation.js'
import AnimationDocs from './Animation/Animation.mdx'

export default {
  title: 'Tokens/Animation',
  argTypes: {
    speed: {
      control: { type: 'select' },
      options: ['input (120ms)', 'sidebar (200ms)', 'modal (300ms)', 'panel (400ms)'],
    },
  },
  parameters: {
    docs: {
      page: AnimationDocs,
    },
  },
}

const Template = ({ speed, ...args }) => {
  return createAnimation({ speed, ...args })
}

export const Default = Template.bind({})
Default.args = {
  speed: 'input (120ms)',
}

export const Navigation = Template.bind({})
Navigation.args = {
  speed: 'navigation (200ms)',
}

export const Sidebar = Template.bind({})
Sidebar.args = {
  speed: 'sidebar (300ms)',
}

export const Modal = Template.bind({})
Modal.args = {
  speed: 'modal (300ms)',
}

export const Panel = Template.bind({})
Panel.args = {
  speed: 'panel (400ms)',
}

export const Flash = Template.bind({})
Flash.args = {
  speed: 'flash (5s)',
}
