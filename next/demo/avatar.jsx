import { createRoot } from 'react-dom/client'
import { Avatar } from '../components/avatar/Avatar.jsx'
import '../components/avatar/avatar.js'
import '../tokens.css'
import '../components/avatar/avatar.css'
import './demo.css'

createRoot(document.getElementById('react-avatars')).render(
  <>
    <Avatar.Root size="small">
      <Avatar.Image src="https://picsum.photos/id/64/200/200" alt="Jane Cooper" />
      <Avatar.Fallback>JC</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root as="a" href="#" size="medium">
      <Avatar.Image src="https://picsum.photos/id/91/200/200" alt="Wade Warren" />
      <Avatar.Fallback>WW</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root as="button" onClick={() => console.log('avatar clicked')}>
      <Avatar.Image src="https://picsum.photos/id/1027/200/200" alt="Esther Howard" />
      <Avatar.Fallback>EH</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image src="/missing.jpg" alt="Broken image" />
      <Avatar.Fallback>BI</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root as="button" disabled>
      <Avatar.Fallback>DA</Avatar.Fallback>
    </Avatar.Root>
  </>
)

createRoot(document.getElementById('react-flat')).render(
  <>
    <Avatar.Root size="medium">
      <Avatar.Image src="https://picsum.photos/id/177/200/200" alt="Robert Fox" />
      <Avatar.Fallback>RF</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root size="medium">
      <Avatar.Fallback>RF</Avatar.Fallback>
    </Avatar.Root>
  </>
)
