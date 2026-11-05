import type { ComponentPropsWithoutRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const tagVariants = cva('tag', {
  variants: {
    variant: {
      primary: 'tag--primary',
      danger: 'tag--danger',
      warning: 'tag--warning',
      info: 'tag--info',
      notice: 'tag--notice',
    },
  },
})

export interface TagRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof tagVariants> {}

function TagRoot({ variant, className, ...props }: TagRootProps) {
  const classes = tagVariants({ variant, className })

  return <div data-slot="tag" className={classes} {...props} />
}

export interface TagLabelProps extends ComponentPropsWithoutRef<'span'> {}

function TagLabel({ className, ...props }: TagLabelProps) {
  return <span data-slot="tag-label" className={cx('tag__label', className)} {...props} />
}

const Tag = {
  Root: TagRoot,
  Label: TagLabel,
}

export { Tag, tagVariants }
