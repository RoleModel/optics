import type { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

import { Button, type ButtonProps } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import '@/registry/optics/lib/invoker-commands'

export interface ModalTriggerProps extends ButtonProps {
  for: string
}

function ModalTrigger({ for: commandfor, ...props }: ModalTriggerProps) {
  return <Button data-slot="modal-trigger" commandfor={commandfor} command="show-modal" {...props} />
}

export interface ModalRootProps extends ComponentPropsWithoutRef<'dialog'> {}

function ModalRoot({ className, ...props }: ModalRootProps) {
  return <dialog data-slot="modal" className={cx('modal', className)} closedby="any" {...props} />
}

export interface ModalHeaderProps extends ComponentPropsWithoutRef<'div'> {}

function ModalHeader({ className, ...props }: ModalHeaderProps) {
  return <div data-slot="modal-header" className={cx('modal__header', className)} {...props} />
}

export interface ModalBodyProps extends ComponentPropsWithoutRef<'div'> {}

function ModalBody({ className, ...props }: ModalBodyProps) {
  return <div data-slot="modal-body" className={cx('modal__body', className)} {...props} />
}

export interface ModalFooterProps extends ComponentPropsWithoutRef<'div'> {}

function ModalFooter({ className, ...props }: ModalFooterProps) {
  return <div data-slot="modal-footer" className={cx('modal__footer', className)} {...props} />
}

export interface ModalCloseProps extends ButtonProps {
  label?: string
}

function ModalClose({ label = 'Close', children, onClick, ...props }: ModalCloseProps) {
  const iconOnly = children === undefined

  const handleClick: ModalCloseProps['onClick'] = (event) => {
    onClick?.(event)
    if (!event.defaultPrevented) {
      event.currentTarget.closest('dialog')?.close()
    }
  }

  return (
    <Button
      data-slot="modal-close"
      shape={iconOnly ? 'circle' : undefined}
      borderless={iconOnly ? true : undefined}
      aria-label={iconOnly ? label : undefined}
      onClick={handleClick}
      {...props}
    >
      {children ?? <Icon name="close" size="x-large" />}
    </Button>
  )
}

const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
}

export { Modal }
