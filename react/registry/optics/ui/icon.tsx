import type { ComponentPropsWithoutRef, ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const iconVariants = cva('icon', {
  variants: {
    svg: { false: 'material-symbols-outlined', true: 'icon--svg' },
    size: {
      small: 'icon--small',
      medium: 'icon--medium',
      large: 'icon--large',
      'x-large': 'icon--x-large',
    },
    weight: {
      light: 'icon--weight-light',
      normal: 'icon--weight-normal',
      'semi-bold': 'icon--weight-semi-bold',
      bold: 'icon--weight-bold',
    },
    filled: { false: 'icon--outlined', true: 'icon--filled' },
    emphasis: {
      low: 'icon--low-emphasis',
      normal: 'icon--normal-emphasis',
      high: 'icon--high-emphasis',
    },
  },
})

type IconVariants = VariantProps<typeof iconVariants>

type SharedIconProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> &
  Omit<IconVariants, 'svg' | 'filled'> & {
    label?: string
  }

// Fill is a font axis, so it has no effect on an inline SVG.
export type IconProps = SharedIconProps &
  (
    | { name: string; filled?: IconVariants['filled']; children?: never }
    | { name?: never; filled?: never; children: ReactElement }
  )

function Icon({ name, label, size, weight, filled, emphasis, className, children, ...props }: IconProps) {
  const svg = name === undefined
  const classes = iconVariants({
    svg,
    size,
    weight,
    filled,
    emphasis,
    className,
  })

  return (
    <span
      data-slot="icon"
      className={classes}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      {...props}
    >
      {svg ? children : name}
    </span>
  )
}

export { Icon, iconVariants }
