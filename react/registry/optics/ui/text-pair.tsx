// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const textPairVariants = cva('text-pair', {
  variants: {
    inline: { true: 'text-pair--inline' },
  },
})

export interface TextPairRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof textPairVariants> {}

function TextPairRoot({ inline, className, ...props }: TextPairRootProps) {
  const classes = textPairVariants({ inline, className })

  return <div data-slot="text-pair" className={classes} {...props} />
}

function sizeVariants(element: 'title' | 'subtitle') {
  return {
    size: {
      small: `text-pair__${element}--small`,
      medium: `text-pair__${element}--medium`,
      large: `text-pair__${element}--large`,
    },
  }
}

const textPairTitleVariants = cva('text-pair__title', {
  variants: sizeVariants('title'),
})

export interface TextPairTitleProps
  extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof textPairTitleVariants> {}

function TextPairTitle({ size, className, ...props }: TextPairTitleProps) {
  const classes = textPairTitleVariants({ size, className })

  return <span data-slot="text-pair-title" className={classes} {...props} />
}

const textPairSubtitleVariants = cva('text-pair__subtitle', {
  variants: sizeVariants('subtitle'),
})

export interface TextPairSubtitleProps
  extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof textPairSubtitleVariants> {}

function TextPairSubtitle({ size, className, ...props }: TextPairSubtitleProps) {
  const classes = textPairSubtitleVariants({ size, className })

  return <span data-slot="text-pair-subtitle" className={classes} {...props} />
}

const TextPair = {
  Root: TextPairRoot,
  Title: TextPairTitle,
  Subtitle: TextPairSubtitle,
}

export { TextPair, textPairVariants }
