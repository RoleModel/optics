// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

import { Icon } from '@/registry/optics/ui/icon'
import { builtInIconName } from '@/registry/optics/lib/icon-pack'

const breadcrumbsVariants = cva('breadcrumbs', {
  variants: {
    size: {
      small: 'breadcrumbs--small',
      large: 'breadcrumbs--large',
    },
  },
})

export interface BreadcrumbsRootProps
  extends ComponentPropsWithoutRef<'nav'>, VariantProps<typeof breadcrumbsVariants> {}

function BreadcrumbsRoot({ size, className, ...props }: BreadcrumbsRootProps) {
  const classes = breadcrumbsVariants({ size, className })

  return <nav data-slot="breadcrumbs" className={classes} aria-label="Breadcrumb" {...props} />
}

export interface BreadcrumbsLinkProps extends ComponentPropsWithoutRef<'a'> {}

function BreadcrumbsLink({ className, ...props }: BreadcrumbsLinkProps) {
  return <a data-slot="breadcrumbs-link" className={cx('breadcrumbs__link', className)} {...props} />
}

export interface BreadcrumbsSeparatorProps extends ComponentPropsWithoutRef<'div'> {}

function BreadcrumbsSeparator({
  children = <Icon name={builtInIconName('arrow_right')} />,
  className,
  ...props
}: BreadcrumbsSeparatorProps) {
  return (
    <div data-slot="breadcrumbs-separator" className={cx('breadcrumbs__separator', className)} aria-hidden {...props}>
      {children}
    </div>
  )
}

export interface BreadcrumbsTextProps extends ComponentPropsWithoutRef<'span'> {}

function BreadcrumbsText({ className, ...props }: BreadcrumbsTextProps) {
  return (
    <span data-slot="breadcrumbs-text" className={cx('breadcrumbs__text', className)} aria-current="page" {...props} />
  )
}

const Breadcrumbs = {
  Root: BreadcrumbsRoot,
  Link: BreadcrumbsLink,
  Separator: BreadcrumbsSeparator,
  Text: BreadcrumbsText,
}

export { Breadcrumbs, breadcrumbsVariants }
