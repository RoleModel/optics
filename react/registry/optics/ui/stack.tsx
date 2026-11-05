import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { flexUtilityVariants } from '@/registry/optics/lib/flex-utilities'

const stackVariants = cva('op-stack', {
  variants: flexUtilityVariants,
})

export interface StackProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof stackVariants> {}

function Stack({ align, justify, gap, wrap, self, grow, className, ...props }: StackProps) {
  const classes = stackVariants({
    align,
    justify,
    gap,
    wrap,
    self,
    grow,
    className,
  })

  return <div data-slot="stack" className={classes} {...props} />
}

export { Stack, stackVariants }
