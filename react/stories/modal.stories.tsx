import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Modal } from '@/registry/optics/ui/modal'

const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Modal.Trigger for="modal-default">Open modal</Modal.Trigger>
      <Modal.Root id="modal-default">
        <Modal.Header>
          Edit profile
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>Update your name, photo, and contact details.</Modal.Body>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  ),
}

export const BodyOnly: Story = {
  render: () => (
    <>
      <Modal.Trigger for="modal-body-only" variant="primary">
        Open simple modal
      </Modal.Trigger>
      <Modal.Root id="modal-body-only">
        <Modal.Body>
          The header, close button, and footer are all optional. Press Esc or click outside to close.
        </Modal.Body>
      </Modal.Root>
    </>
  ),
}
