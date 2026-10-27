import { Avatar } from '../../components/avatar/Avatar.jsx'
import { initials } from './initials.js'

// React version of demo-avatar.js:
//
// <DemoAvatar name="Jane Cooper" src="/jane.jpg" size="small" />
export function DemoAvatar({ name, src, ...props }) {
  return (
    <Avatar.Root {...props}>
      {src && <Avatar.Image src={src} alt={name} />}
      <Avatar.Fallback>{initials(name)}</Avatar.Fallback>
    </Avatar.Root>
  )
}
