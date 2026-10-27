import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Badge } from '../components/badge/Badge.jsx'
import '../components/badge/badge.js'
import '../tokens.css'
import '../components/icon/icon.css'
import '../components/icon/packs/material-symbols-variable.css'
import '../components/badge/badge.css'
import './demo.css'
import './assemblies/demo-nav.js'
import './assemblies/demo-invoice-status.js'
import './assemblies/demo-notifications.js'
import { DemoInvoiceStatus } from './assemblies/DemoInvoiceStatus.jsx'
import { DemoNotifications } from './assemblies/DemoNotifications.jsx'

createRoot(document.getElementById('react-badges')).render(
  <>
    <Badge>Neutral</Badge>
    <Badge variant="warning" pill>
      Pill
    </Badge>
    <Badge variant="info">
      <Badge.Icon name="open_in_new" /> Icon first
    </Badge>
    <button type="button" className="notification-button">
      Inbox
      <Badge variant="danger" pill notification="right">
        3
      </Badge>
    </button>
  </>
)

function ReactAssembly() {
  const [count, setCount] = useState(98)

  return (
    <>
      <div className="op-cluster">
        {['draft', 'sent', 'paid', 'due', 'overdue'].map((status) => (
          <DemoInvoiceStatus key={status} status={status} />
        ))}
      </div>
      <div className="op-cluster gap-xl">
        <DemoNotifications count={count} />
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Add one
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Read all
        </button>
      </div>
    </>
  )
}

createRoot(document.getElementById('react-assembly')).render(<ReactAssembly />)

createRoot(document.getElementById('react-large')).render(
  <>
    <Badge variant="primary">Large</Badge>
    <Badge variant="notice" pill>
      <Badge.Icon name="check" /> Done
    </Badge>
  </>
)
