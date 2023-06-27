import { createModal } from './Modal.js'

export default {
  title: 'Components/Modal',
  render: ({ header, ...args }) => {
    return createModal({ header, ...args })
  },
  argTypes: {
    header: { control: 'text' },
    body: { control: 'text' },
    footer: { control: 'text' },
  },
}

export const Default = {
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
  },
}

export const LotsOfContent = {
  args: {
    header: 'Modal Title',
    body: 'This a lot of content in the modal!'.repeat(50),
    footer: 'This a different footer',
  },
}

export const Inline = {
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    inlineDemo: true,
  },
}
