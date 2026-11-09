import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'
import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva('avatar', {
  variants: {
    size: {
      small: 'avatar--small',
      medium: 'avatar--medium',
      large: 'avatar--large',
    },
    disabled: { false: null, true: 'avatar--disabled' },
  },
})

interface AvatarRootProps extends AvatarPrimitive.Root.Props, VariantProps<typeof avatarVariants> {}

function AvatarRoot({ size, disabled, className, render = <div />, ...props }: AvatarRootProps) {
  const classes = avatarVariants({ size, disabled, className })

  // Optics shows the hover state on any avatar that is not a div, so a plain avatar must be a div.
  // Pass `render={<a href="..." />}` for a linked avatar.
  return <AvatarPrimitive.Root data-slot="avatar" className={classes} render={render} {...props} />
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
