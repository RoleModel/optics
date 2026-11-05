import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const tableVariants = cva('table', {
  variants: {
    variant: {
      primary: 'table--primary',
      danger: 'table--danger',
    },
    layout: {
      auto: 'table--layout-auto',
      fixed: 'table--layout-fixed',
    },
    density: {
      default: 'table--density-default',
      comfortable: 'table--density-comfortable',
      compact: 'table--density-compact',
    },
    striped: {
      even: 'table--striped-even',
      odd: 'table--striped-odd',
    },
    sticky: {
      header: 'table--sticky-header',
      footer: 'table--sticky-footer',
      both: 'table--sticky-header table--sticky-footer',
    },
  },
})

export interface TableProps extends ComponentPropsWithoutRef<'table'>, VariantProps<typeof tableVariants> {}

function Table({ variant, layout, density, striped, sticky, className, ...props }: TableProps) {
  const classes = tableVariants({
    variant,
    layout,
    density,
    striped,
    sticky,
    className,
  })

  return <table data-slot="table" className={classes} {...props} />
}

export { Table, tableVariants }
