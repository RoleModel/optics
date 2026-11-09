// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { useRender } from '@base-ui/react/use-render'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const navbarVariants = cva('navbar', {
  variants: {
    variant: {
      primary: 'navbar--primary',
    },
  },
})

export interface NavbarRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof navbarVariants> {}

function NavbarRoot({ variant, className, ...props }: NavbarRootProps) {
  const classes = navbarVariants({ variant, className })

  return <div data-slot="navbar" className={classes} {...props} />
}

export interface NavbarBrandProps extends ComponentPropsWithoutRef<'a'> {}

function NavbarBrand({ className, ...props }: NavbarBrandProps) {
  return <a data-slot="navbar-brand" className={cx('navbar__brand', className)} {...props} />
}

const navbarContentVariants = cva('navbar__content', {
  variants: {
    justify: {
      start: 'navbar__content--justify-start',
      center: 'navbar__content--justify-center',
      end: 'navbar__content--justify-end',
    },
  },
})

export interface NavbarContentProps
  extends useRender.ComponentProps<'nav'>, VariantProps<typeof navbarContentVariants> {}

function NavbarContent({ justify, className, render, ref, ...props }: NavbarContentProps) {
  const classes = navbarContentVariants({ justify, className })

  return useRender({
    defaultTagName: 'nav',
    render,
    ref,
    props: { 'data-slot': 'navbar-content', className: classes, ...props },
  })
}

const Navbar = {
  Root: NavbarRoot,
  Brand: NavbarBrand,
  Content: NavbarContent,
}

export { Navbar, navbarVariants }
