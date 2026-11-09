// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cx } from 'class-variance-authority'

export interface ContentHeaderRootProps extends ComponentPropsWithoutRef<'header'> {}

function ContentHeaderRoot({ className, ...props }: ContentHeaderRootProps) {
  return <header data-slot="content-header" className={cx('content-header', className)} {...props} />
}

export interface ContentHeaderDetailsProps extends ComponentPropsWithoutRef<'div'> {}

function ContentHeaderDetails({ className, ...props }: ContentHeaderDetailsProps) {
  return <div data-slot="content-header-details" className={cx('content-header__details', className)} {...props} />
}

export interface ContentHeaderContextProps extends ComponentPropsWithoutRef<'span'> {}

function ContentHeaderContext({ className, ...props }: ContentHeaderContextProps) {
  return <span data-slot="content-header-context" className={cx('content-header__context', className)} {...props} />
}

export interface ContentHeaderTitleProps extends ComponentPropsWithoutRef<'h1'> {}

function ContentHeaderTitle({ className, ...props }: ContentHeaderTitleProps) {
  return <h1 data-slot="content-header-title" className={cx('content-header__title', className)} {...props} />
}

export interface ContentHeaderSublineProps extends ComponentPropsWithoutRef<'span'> {}

function ContentHeaderSubline({ className, ...props }: ContentHeaderSublineProps) {
  return <span data-slot="content-header-subline" className={cx('content-header__subline', className)} {...props} />
}

export interface ContentHeaderAsideProps extends ComponentPropsWithoutRef<'div'> {}

function ContentHeaderAside({ className, ...props }: ContentHeaderAsideProps) {
  return <div data-slot="content-header-aside" className={cx('content-header__aside', className)} {...props} />
}

const ContentHeader = {
  Root: ContentHeaderRoot,
  Details: ContentHeaderDetails,
  Context: ContentHeaderContext,
  Title: ContentHeaderTitle,
  Subline: ContentHeaderSubline,
  Aside: ContentHeaderAside,
}

export { ContentHeader }
