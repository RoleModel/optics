import { useId } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Modal } from '@/registry/optics/ui/modal'

interface ModalArgs {
  id: string
  header: string
  body: string
  footer: string
}

const meta = {
  title: 'Components/Modal',
  args: {
    id: 'modal-default',
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    footer: '',
  },
  argTypes: {
    id: { control: 'text', description: '`id` of `Modal.Root`, which `Modal.Trigger` names in `for`' },
    header: { control: 'text', description: 'Text of `Modal.Header`, before its `Modal.Close` button' },
    body: { control: 'text', description: 'Children of `Modal.Body`' },
    footer: { control: 'text', description: 'Children of `Modal.Footer`. Empty shows Cancel and Save buttons' },
  },
  render: function Render({ id, header, body, footer }) {
    const titleId = useId()

    return (
      <>
        <Modal.Trigger for={id}>Show Dialog</Modal.Trigger>
        <Modal.Root id={id} aria-labelledby={titleId}>
          <Modal.Header>
            <span id={titleId}>{header}</span>
            <Modal.Close />
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            {footer || (
              <>
                <Modal.Close>Cancel</Modal.Close>
                <Button variant="primary">Save</Button>
              </>
            )}
          </Modal.Footer>
        </Modal.Root>
      </>
    )
  },
} satisfies Meta<ModalArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dialog: Story = {
  args: { id: 'modal-dialog' },
}

export const LotsOfContent: Story = {
  args: {
    id: 'modal-lots-of-content',
    body: 'This a lot of content in the modal! '.repeat(50).trim(),
    footer: 'This a different footer',
  },
}
