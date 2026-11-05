import { useState, type ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

import { Button, type ButtonProps } from '@/registry/optics/ui/button'
import '@/registry/optics/lib/invoker-commands'

export interface ConfirmDialogTriggerProps extends ButtonProps {
  for: string
}

function ConfirmDialogTrigger({ for: commandfor, ...props }: ConfirmDialogTriggerProps) {
  return <Button data-slot="confirm-dialog-trigger" commandfor={commandfor} command="show-modal" {...props} />
}

export interface ConfirmDialogRootProps extends ComponentPropsWithoutRef<'dialog'> {}

function ConfirmDialogRoot({ children, className, style, onToggle, ...props }: ConfirmDialogRootProps) {
  // Optics' confirm-dialog CSS predates native <dialog> support: visibility
  // keys on the wrapper's --active class, not [open]. Mirroring the native
  // open state into the class keeps the CSS working (and its transitions
  // running) while invoker commands drive the dialog itself.
  const [open, setOpen] = useState(false)

  const handleToggle: ConfirmDialogRootProps['onToggle'] = (event) => {
    onToggle?.(event)
    setOpen(event.currentTarget.open)
  }

  return (
    <dialog
      data-slot="confirm-dialog"
      className={cx('confirm-dialog-wrapper', open && 'confirm-dialog-wrapper--active', className)}
      // The wrapper class was written for a <div>, so unlike dialog.modal it
      // doesn't reset the UA dialog chrome that would frame the card.
      style={{
        padding: 0,
        border: 'none',
        background: 'transparent',
        ...style,
      }}
      onToggle={handleToggle}
      {...props}
    >
      <div data-slot="confirm-dialog-backdrop" className="confirm-dialog-wrapper__backdrop" />
      <div data-slot="confirm-dialog-content" className="confirm-dialog">
        {children}
      </div>
    </dialog>
  )
}

export interface ConfirmDialogHeaderProps extends ComponentPropsWithoutRef<'div'> {}

function ConfirmDialogHeader({ className, ...props }: ConfirmDialogHeaderProps) {
  return <div data-slot="confirm-dialog-header" className={cx('confirm-dialog__header', className)} {...props} />
}

export interface ConfirmDialogBodyProps extends ComponentPropsWithoutRef<'div'> {}

function ConfirmDialogBody({ className, ...props }: ConfirmDialogBodyProps) {
  return <div data-slot="confirm-dialog-body" className={cx('confirm-dialog__body', className)} {...props} />
}

export interface ConfirmDialogFooterProps extends ComponentPropsWithoutRef<'div'> {}

function ConfirmDialogFooter({ className, ...props }: ConfirmDialogFooterProps) {
  return <div data-slot="confirm-dialog-footer" className={cx('confirm-dialog__footer', className)} {...props} />
}

export interface ConfirmDialogCloseProps extends ButtonProps {}

function ConfirmDialogClose({ onClick, ...props }: ConfirmDialogCloseProps) {
  const handleClick: ConfirmDialogCloseProps['onClick'] = (event) => {
    onClick?.(event)
    if (!event.defaultPrevented) {
      event.currentTarget.closest('dialog')?.close()
    }
  }

  return <Button data-slot="confirm-dialog-close" onClick={handleClick} {...props} />
}

const ConfirmDialog = {
  Root: ConfirmDialogRoot,
  Trigger: ConfirmDialogTrigger,
  Header: ConfirmDialogHeader,
  Body: ConfirmDialogBody,
  Footer: ConfirmDialogFooter,
  Close: ConfirmDialogClose,
}

export { ConfirmDialog }
