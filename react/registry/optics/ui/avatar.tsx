// Optics version: 2.6.1
import type { MouseEvent } from 'react'
import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'
import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva('avatar', {
  variants: {
    size: {
      small: 'avatar--small',
      medium: 'avatar--medium',
      large: 'avatar--large',
    },
    disabled: { true: 'avatar--disabled' },
  },
})

interface AvatarRootProps extends AvatarPrimitive.Root.Props, VariantProps<typeof avatarVariants> {}

function AvatarRoot({ size, disabled, className, render = <div />, onClick, ...props }: AvatarRootProps) {
  const classes = avatarVariants({ size, disabled, className })

  // avatar--disabled only blocks the pointer. A disabled link must also leave the tab order and ignore Enter.
  const disabledProps = disabled
    ? {
        'aria-disabled': true,
        tabIndex: -1,
        onClick: (event: MouseEvent<HTMLElement>) => event.preventDefault(),
      }
    : { onClick }

  // Optics shows the hover state on any avatar that is not a div, so a plain avatar must be a div.
  // Pass `render={<a href="..." />}` for a linked avatar.
  return <AvatarPrimitive.Root data-slot="avatar" className={classes} render={render} {...props} {...disabledProps} />
}

type AvatarImageProps = AvatarPrimitive.Image.Props

function AvatarImage(props: AvatarImageProps) {
  return <AvatarPrimitive.Image data-slot="avatar-image" {...props} />
}

type AvatarFallbackProps = AvatarPrimitive.Fallback.Props

function AvatarFallback(props: AvatarFallbackProps) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" {...props} />
}

const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
}

export { Avatar, avatarVariants }
