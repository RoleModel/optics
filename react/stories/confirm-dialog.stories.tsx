import { useId } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ConfirmDialog } from '@/registry/optics/ui/confirm-dialog'

interface ConfirmDialogArgs {
  title: string
  message: string
}

const meta = {
  title: 'Components/Confirm Dialog',
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
  },
  argTypes: {
    title: { control: 'text', description: 'Children of `ConfirmDialog.Header`' },
    message: { control: 'text', description: 'Children of `ConfirmDialog.Body`' },
  },
  render: function Render({ title, message }) {
    const dialogId = useId()
    const titleId = useId()

    return (
      <>
        <ConfirmDialog.Trigger for={dialogId} variant="destructive">
          Delete
        </ConfirmDialog.Trigger>
        <ConfirmDialog.Root id={dialogId} aria-labelledby={titleId}>
          <ConfirmDialog.Header id={titleId}>{title}</ConfirmDialog.Header>
          <ConfirmDialog.Body>{message}</ConfirmDialog.Body>
          <ConfirmDialog.Footer>
            <ConfirmDialog.Close>Cancel</ConfirmDialog.Close>
            <ConfirmDialog.Close variant="destructive">Yes, I'm Sure</ConfirmDialog.Close>
          </ConfirmDialog.Footer>
        </ConfirmDialog.Root>
      </>
    )
  },
} satisfies Meta<ConfirmDialogArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
