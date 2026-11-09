// Optics version: 2.6.1
import type { ComponentPropsWithoutRef, ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { iconGlyph } from '@/registry/optics/lib/icon-pack'

const iconVariants = cva('icon', {
  variants: {
    svg: { true: 'icon--svg' },
    size: {
      small: 'icon--small',
      medium: 'icon--medium',
      large: 'icon--large',
      'x-large': 'icon--x-large',
    },
    weight: {
      thin: 'icon--weight-thin',
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

// Fill and duotone are font styles, so they have no effect on an inline SVG.
export type IconProps = SharedIconProps &
  (
    | { name: string; filled?: IconVariants['filled']; duotone?: boolean; children?: never }
    | { name?: never; filled?: never; duotone?: never; children: ReactElement }
  )

function Icon({ name, label, size, weight, filled, duotone, emphasis, className, children, ...props }: IconProps) {
  const glyph = name === undefined ? null : iconGlyph({ name, filled, duotone })
  const classes = iconVariants({
    svg: glyph === null,
    size,
    weight,
    filled,
    emphasis,
    className: [...(glyph?.classes ?? []), className],
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
      {glyph ? glyph.text : children}
    </span>
  )
}

export { Icon, iconVariants }
