import { createTransition } from './Transition/Transition.js'
import TransitionDocs from './Transition/Transition.mdx'

export default {
  title: 'Tokens/Transition',
  argTypes: {
    speed: {
      control: { type: 'select' },
      options: [
        'input (120ms)',
        'navigation (200ms)',
        'sidebar (300ms)',
        'modal (300ms)',
        'panel (400ms)',
        'flash (5s)',
      ],
    },
  },
  parameters: {
    docs: {
      page: TransitionDocs,
    },
  },
}

const Template = ({ speed, ...args }) => {
  return createTransition({ speed, ...args })
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
