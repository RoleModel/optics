import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Alert } from '../components/alert/Alert.jsx'
import '../components/alert/alert.js'
import '../tokens.css'
import '../components/icon/icon.css'
import '../components/icon/packs/material-symbols-variable.css'
import '../components/alert/alert.css'
import './demo.css'
import './assemblies/demo-nav.js'
import './assemblies/demo-alert.js'
import { DemoAlert } from './assemblies/DemoAlert.jsx'

document.getElementById('flash-notice').addEventListener('click', () => {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<demo-alert variant="notice" tone="filled" flash description="Your changes were saved."></demo-alert>'
  )
})

const TONES = {
  muted: ['warning', 'danger', 'info', 'notice', undefined],
  filled: ['warning', 'alert', 'info', 'notice', undefined],
}

createRoot(document.getElementById('alert-tones')).render(
  Object.entries(TONES).flatMap(([tone, variants]) =>
    variants.map((variant) => (
      <op-alert key={`${tone}-${variant}`} variant={variant} tone={tone}>
        <op-alert-description>{variant ? variant[0].toUpperCase() + variant.slice(1) : 'Neutral'}</op-alert-description>
      </op-alert>
    ))
  )
)

createRoot(document.getElementById('react-alerts')).render(
  <Alert.Root variant="info" onDismiss={() => console.log('dismissed')}>
    <Alert.Icon name="info" />
    <Alert.Messages>
      <Alert.Title>Info</Alert.Title>
      <Alert.Description>Close me. The alert hides itself and calls onDismiss.</Alert.Description>
    </Alert.Messages>
    <Alert.Close />
  </Alert.Root>
)

function ReactAssembly() {
  const [flashes, setFlashes] = useState([])

  return (
    <>
      <DemoAlert
        variant="danger"
        tone="muted"
        heading="Danger"
        description="This one stays: onDismiss calls preventDefault()."
        onDismiss={(event) => event.preventDefault()}
      />
      <div className="op-cluster">
        <button type="button" onClick={() => setFlashes((ids) => [...ids, Date.now()])}>
          Show a React flash
        </button>
      </div>
      {flashes.map((id) => (
        <DemoAlert key={id} variant="warning" tone="filled" flash description="A flash from React." />
      ))}
    </>
  )
}

createRoot(document.getElementById('react-assembly')).render(<ReactAssembly />)

createRoot(document.getElementById('react-card')).render(
  <DemoAlert
    variant="notice"
    icon="celebration"
    heading="Card"
    description="More padding, a large radius, no border, and a shadow."
  />
)
