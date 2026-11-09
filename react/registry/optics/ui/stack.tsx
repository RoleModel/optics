// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { alignVariants, gapVariants } from '@/registry/optics/lib/flex-utilities'

const stackVariants = cva('op-stack', {
  variants: { align: alignVariants, gap: gapVariants },
})

export interface StackProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof stackVariants> {}

function Stack({ align, gap, className, ...props }: StackProps) {
  return <div data-slot="stack" className={stackVariants({ align, gap, className })} {...props} />
}

export { Stack, stackVariants }
