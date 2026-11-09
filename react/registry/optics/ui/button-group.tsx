// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

export interface ButtonGroupProps extends ComponentPropsWithoutRef<'div'> {}

function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return <div data-slot="button-group" role="group" className={cx('btn-group', className)} {...props} />
}

export { ButtonGroup }
