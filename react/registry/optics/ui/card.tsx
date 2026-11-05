import type { ComponentPropsWithoutRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const cardVariants = cva('card', {
  variants: {
    padded: { false: null, true: 'card--padded' },
    condensed: { false: null, true: 'card--condensed' },
    shadow: {
      'x-small': 'card--shadow-x-small',
      small: 'card--shadow-small',
      medium: 'card--shadow-medium',
      large: 'card--shadow-large',
      'x-large': 'card--shadow-x-large',
    },
  },
})

export interface CardRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof cardVariants> {}

function CardRoot({ padded, condensed, shadow, className, ...props }: CardRootProps) {
  const classes = cardVariants({ padded, condensed, shadow, className })

  return <div data-slot="card" className={classes} {...props} />
}

export interface CardHeaderProps extends ComponentPropsWithoutRef<'div'> {}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div data-slot="card-header" className={cx('card__header', className)} {...props} />
}

export interface CardBodyProps extends ComponentPropsWithoutRef<'div'> {}

function CardBody({ className, ...props }: CardBodyProps) {
  return <div data-slot="card-body" className={cx('card__body', className)} {...props} />
}

export interface CardFooterProps extends ComponentPropsWithoutRef<'div'> {}

function CardFooter({ className, ...props }: CardFooterProps) {
  return <div data-slot="card-footer" className={cx('card__footer', className)} {...props} />
}

const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
}

export { Card, cardVariants }
