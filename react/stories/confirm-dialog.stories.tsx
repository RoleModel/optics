import type { Meta, StoryObj } from '@storybook/react-vite'

import { ConfirmDialog } from '@/registry/optics/ui/confirm-dialog'

const meta = {
  title: 'Components/Confirm Dialog',
  component: ConfirmDialog.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmDialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <ConfirmDialog.Trigger for="confirm-dialog-default" variant="destructive">
        Delete project
      </ConfirmDialog.Trigger>
      <ConfirmDialog.Root id="confirm-dialog-default">
        <ConfirmDialog.Header>Delete project?</ConfirmDialog.Header>
        <ConfirmDialog.Body>This permanently removes the project and its files.</ConfirmDialog.Body>
        <ConfirmDialog.Footer>
          <ConfirmDialog.Close>Cancel</ConfirmDialog.Close>
          <ConfirmDialog.Close variant="destructive">Yes, delete it</ConfirmDialog.Close>
        </ConfirmDialog.Footer>
      </ConfirmDialog.Root>
    </>
  ),
}

export const Primary: Story = {
  render: () => (
    <>
      <ConfirmDialog.Trigger for="confirm-dialog-primary" variant="primary">
        Publish changes
      </ConfirmDialog.Trigger>
      <ConfirmDialog.Root id="confirm-dialog-primary">
        <ConfirmDialog.Header>Publish changes?</ConfirmDialog.Header>
        <ConfirmDialog.Body>Everyone with access will see the new version.</ConfirmDialog.Body>
        <ConfirmDialog.Footer>
          <ConfirmDialog.Close>Not yet</ConfirmDialog.Close>
          <ConfirmDialog.Close variant="primary">Publish</ConfirmDialog.Close>
        </ConfirmDialog.Footer>
      </ConfirmDialog.Root>
    </>
  ),
}
