// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { alignVariants, gapVariants } from '@/registry/optics/lib/flex-utilities'

const splitVariants = cva('op-split', {
  variants: { align: alignVariants, gap: gapVariants },
})

export interface SplitProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof splitVariants> {}

function Split({ align, gap, className, ...props }: SplitProps) {
  return <div data-slot="split" className={splitVariants({ align, gap, className })} {...props} />
}

export { Split, splitVariants }
