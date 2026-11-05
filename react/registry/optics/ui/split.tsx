import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { flexUtilityVariants } from '@/registry/optics/lib/flex-utilities'

const splitVariants = cva('op-split', {
  variants: flexUtilityVariants,
})

export interface SplitProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof splitVariants> {}

function Split({ align, justify, gap, wrap, self, grow, className, ...props }: SplitProps) {
  const classes = splitVariants({
    align,
    justify,
    gap,
    wrap,
    self,
    grow,
    className,
  })

  return <div data-slot="split" className={classes} {...props} />
}

export { Split, splitVariants }
