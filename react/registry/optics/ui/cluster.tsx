import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { flexUtilityVariants } from '@/registry/optics/lib/flex-utilities'

const clusterVariants = cva('op-cluster', {
  variants: flexUtilityVariants,
})

export interface ClusterProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof clusterVariants> {}

function Cluster({ align, justify, gap, wrap, self, grow, className, ...props }: ClusterProps) {
  const classes = clusterVariants({
    align,
    justify,
    gap,
    wrap,
    self,
    grow,
    className,
  })

  return <div data-slot="cluster" className={classes} {...props} />
}

export { Cluster, clusterVariants }
