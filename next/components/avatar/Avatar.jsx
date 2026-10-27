import { createContext, use, useLayoutEffect, useState } from 'react'
import { cx } from '../../shared/cx.js'

// React version of avatar.spec.json. Compose the parts:
//
// <Avatar.Root size="small">
//   <Avatar.Image src="/jane.jpg" alt="Jane Cooper" />
//   <Avatar.Fallback>JC</Avatar.Fallback>
// </Avatar.Root>

const AvatarContext = createContext(null)

function useAvatar(part) {
  const avatar = use(AvatarContext)
  if (!avatar) throw new Error(`<Avatar.${part}> must be inside <Avatar.Root>`)
  return avatar
}

// With no Avatar.Image, the status stays error and the fallback shows.
function AvatarRoot({ as: Element = 'span', size, disabled, className, ...props }) {
  const [status, setStatus] = useState('error')
  const disabledProps =
    Element === 'button' ? { type: 'button', disabled } : disabled ? { 'aria-disabled': true, tabIndex: -1 } : {}

  return (
    <AvatarContext value={{ status, setStatus }}>
      <Element
        data-slot="avatar"
        className={avatarClasses({ size, disabled, className })}
        {...disabledProps}
        {...props}
      />
    </AvatarContext>
  )
}

function AvatarImage({ src, className, onLoad, onError, ...props }) {
  const { status, setStatus } = useAvatar('Image')

  useLayoutEffect(() => {
    setStatus(src ? 'loading' : 'error')
    return () => setStatus('error')
  }, [src, setStatus])

  return (
    <img
      data-slot="avatar-image"
      src={src}
      hidden={status !== 'loaded'}
      className={cx('avatar__image', className)}
      onLoad={(event) => {
        onLoad?.(event)
        setStatus('loaded')
      }}
      onError={(event) => {
        onError?.(event)
        setStatus('error')
      }}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }) {
  const { status } = useAvatar('Fallback')

  return (
    <span
      data-slot="avatar-fallback"
      hidden={status === 'loaded'}
      className={cx('avatar__fallback', className)}
      {...props}
    />
  )
}

export function avatarClasses({ size, disabled, className }) {
  return cx('avatar', size && `avatar--${size}`, disabled && 'avatar--disabled', className)
}

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
}
