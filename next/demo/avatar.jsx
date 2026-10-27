import { createRoot } from 'react-dom/client'
import { Avatar } from '../components/avatar/Avatar.jsx'
import '../components/avatar/avatar.js'
import '../tokens.css'
import '../components/avatar/avatar.css'
import './demo.css'
import './assemblies/demo-nav.js'
import './assemblies/demo-avatar.js'
import { DemoAvatar } from './assemblies/DemoAvatar.jsx'

createRoot(document.getElementById('react-avatars')).render(
  <Avatar.Root as="button" size="medium" onClick={() => console.log('avatar clicked')}>
    <Avatar.Image src="https://picsum.photos/id/1027/200/200" alt="Esther Howard" />
    <Avatar.Fallback>EH</Avatar.Fallback>
  </Avatar.Root>
)

createRoot(document.getElementById('react-assembly')).render(
  <>
    <DemoAvatar name="Jane Cooper" src="https://picsum.photos/id/64/200/200" size="small" />
    <DemoAvatar as="a" href="#" name="Wade Warren" src="https://picsum.photos/id/91/200/200" size="medium" />
    <DemoAvatar as="button" name="Esther Howard" src="https://picsum.photos/id/1027/200/200" />
    <DemoAvatar name="Brooklyn Simmons" src="/missing.jpg" />
    <DemoAvatar as="button" name="Darlene Robertson" disabled />
  </>
)

createRoot(document.getElementById('react-flat')).render(
  <>
    <DemoAvatar name="Robert Fox" src="https://picsum.photos/id/177/200/200" size="medium" />
    <DemoAvatar name="Robert Fox" size="medium" />
  </>
)
