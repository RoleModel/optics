// Optics version: 2.6.1
import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const frameVariants = cva('op-frame', {
  variants: {
    aspect: {
      square: 'op-frame--square',
      landscape: 'op-frame--landscape',
      portrait: 'op-frame--portrait',
      '4-3': 'op-frame--4-3',
      '3-4': 'op-frame--3-4',
      '3-2': 'op-frame--3-2',
      '2-3': 'op-frame--2-3',
    },
  },
})

export interface FrameProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof frameVariants> {
  inlineSize?: string
}

function Frame({ aspect, inlineSize, className, style, ...props }: FrameProps) {
  const classes = frameVariants({ aspect, className })
  const frameStyle = inlineSize ? ({ '--_op-frame-inline-size': inlineSize, ...style } as CSSProperties) : style

  return <div data-slot="frame" className={classes} style={frameStyle} {...props} />
}

export { Frame, frameVariants }
