// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

import { Button, type ButtonProps } from '@/registry/optics/ui/button'

export interface PaginationRootProps extends ComponentPropsWithoutRef<'nav'> {}

function PaginationRoot({ className, ...props }: PaginationRootProps) {
  return <nav data-slot="pagination" className={cx('pagination', className)} aria-label="Pagination" {...props} />
}

export interface PaginationLinkProps extends ComponentPropsWithoutRef<'a'> {
  active?: boolean
  shape?: ButtonProps['shape']
}

function PaginationLink({ active, shape, ...props }: PaginationLinkProps) {
  return (
    <Button
      size="small"
      borderless
      shape={shape}
      active={active}
      nativeButton={false}
      render={<a data-slot="pagination-link" aria-current={active ? 'page' : undefined} {...props} />}
    />
  )
}

export interface PaginationDividerProps extends ComponentPropsWithoutRef<'div'> {}

function PaginationDivider({ children = '...', className, ...props }: PaginationDividerProps) {
  return (
    <div data-slot="pagination-divider" className={cx('pagination__divider', className)} aria-hidden {...props}>
      {children}
    </div>
  )
}

const Pagination = {
  Root: PaginationRoot,
  Link: PaginationLink,
  Divider: PaginationDivider,
}

export { Pagination }
