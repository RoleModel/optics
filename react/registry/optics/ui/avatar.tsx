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

function AvatarRoot({ size, disabled, className, ...props }: AvatarRootProps) {
  const classes = avatarVariants({ size, disabled, className })

  return <AvatarPrimitive.Root data-slot="avatar" className={classes} {...props} />
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
