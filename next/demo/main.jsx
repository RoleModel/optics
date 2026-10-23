import { createRoot } from 'react-dom/client'
import { Tabs } from '../components/tabs/Tabs.jsx'
import '../components/tabs/tabs.js'
import '../tokens.css'
import '../components/tabs/tabs.css'
import './demo.css'

createRoot(document.getElementById('react-tabs')).render(
  <>
    <Tabs.Root defaultValue="profile" onValueChange={(value) => console.log('selected', value)}>
      <Tabs.List size="large">
        <Tabs.Tab value="profile">Profile</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Tab value="team">Team</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="profile">Profile panel</Tabs.Panel>
      <Tabs.Panel value="billing">Billing panel</Tabs.Panel>
      <Tabs.Panel value="team">Team panel</Tabs.Panel>
    </Tabs.Root>

    <Tabs.List asNav size="small">
      <Tabs.Link href="#" active>
        Overview
      </Tabs.Link>
      <Tabs.Link href="#">Settings</Tabs.Link>
    </Tabs.List>
  </>
)

createRoot(document.getElementById('react-editorial')).render(
  <Tabs.Root defaultValue="latest">
    <Tabs.List>
      <Tabs.Tab value="latest">Latest</Tabs.Tab>
      <Tabs.Tab value="popular">Popular</Tabs.Tab>
      <Tabs.Tab value="saved">Saved</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="latest">
      Large bold text, no padding, a thick brand-color line, and no line under the group.
    </Tabs.Panel>
    <Tabs.Panel value="popular">Popular panel</Tabs.Panel>
    <Tabs.Panel value="saved">Saved panel</Tabs.Panel>
  </Tabs.Root>
)
