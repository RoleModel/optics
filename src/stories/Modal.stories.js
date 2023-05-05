import { createModal } from './Modal/Modal.js'
import ModalDocs from './Modal/Modal.mdx'

export default {
  title: 'Components/Modal',
  argTypes: {
    header: { control: 'text' },
    body: { control: 'text' },
    footer: { control: 'text' },
  },
  parameters: {
    docs: {
      page: ModalDocs,
    },
  },
}

const Template = ({ header, ...args }) => {
  return createModal({ header, ...args })
}

export const Default = Template.bind({})
Default.args = {
  header: 'Modal Title',
  body: 'This is the contents of the modal!',
}

export const LotsOfContent = Template.bind({})
LotsOfContent.args = {
  header: 'Modal Title',
  body: 'This a lot of content in the modal!'.repeat(50),
  footer: 'This a different footer',
}

export const Inline = Template.bind({})
Inline.args = {
  header: 'Modal Title',
  body: 'This is the contents of the modal!',
  inlineDemo: true,
}
