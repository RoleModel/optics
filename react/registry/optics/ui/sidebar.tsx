// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const sidebarVariants = cva('sidebar', {
  variants: {
    size: {
      drawer: 'sidebar--drawer',
      compact: 'sidebar--compact',
      rail: 'sidebar--rail',
    },
    variant: {
      primary: 'sidebar--primary',
    },
    padded: { true: 'sidebar--padded' },
  },
})

export interface SidebarRootProps extends ComponentPropsWithoutRef<'nav'>, VariantProps<typeof sidebarVariants> {}

function SidebarRoot({ size, variant, padded, className, ...props }: SidebarRootProps) {
  const classes = sidebarVariants({ size, variant, padded, className })

  return <nav data-slot="sidebar" className={classes} {...props} />
}

export interface SidebarBrandProps extends ComponentPropsWithoutRef<'a'> {}

function SidebarBrand({ className, ...props }: SidebarBrandProps) {
  return <a data-slot="sidebar-brand" className={cx('sidebar__brand', className)} {...props} />
}

const sidebarContentVariants = cva('sidebar__content', {
  variants: {
    justify: {
      start: 'sidebar__content--start',
      center: 'sidebar__content--center',
      end: 'sidebar__content--end',
    },
  },
})

export interface SidebarContentProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidebarContentVariants> {}

function SidebarContent({ justify, className, ...props }: SidebarContentProps) {
  const classes = sidebarContentVariants({ justify, className })

  return <div data-slot="sidebar-content" className={classes} {...props} />
}

const Sidebar = {
  Root: SidebarRoot,
  Brand: SidebarBrand,
  Content: SidebarContent,
}

export { Sidebar, sidebarVariants }
