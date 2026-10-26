import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Alert } from '../components/alert/Alert.jsx'
import '../components/alert/alert.js'
import '../tokens.css'
import '../components/icon/icon.css'
import '../components/icon/packs/material-symbols-variable.css'
import '../components/alert/alert.css'
import './demo.css'

document.getElementById('flash-notice').addEventListener('click', () => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<op-alert variant="notice" tone="filled" flash>
      <op-icon name="task_alt"></op-icon>
      <op-alert-messages><op-alert-description>Your changes were saved.</op-alert-description></op-alert-messages>
      <op-alert-close></op-alert-close>
    </op-alert>`
  )
})

function ReactAlerts() {
  const [flashes, setFlashes] = useState([])

  return (
    <>
      <Alert.Root variant="info" onDismiss={() => console.log('dismissed')}>
        <Alert.Icon name="info" />
        <Alert.Messages>
          <Alert.Title>Info</Alert.Title>
          <Alert.Description>Close me. The alert hides itself and calls onDismiss.</Alert.Description>
        </Alert.Messages>
        <Alert.Close />
      </Alert.Root>

      <Alert.Root variant="danger" tone="muted" onDismiss={(event) => event.preventDefault()}>
        <Alert.Icon name="lock" />
        <Alert.Messages>
          <Alert.Title>Danger</Alert.Title>
          <Alert.Description>This one stays: onDismiss calls preventDefault().</Alert.Description>
        </Alert.Messages>
        <Alert.Close label="Try to dismiss" />
      </Alert.Root>

      <div className="row">
        <button type="button" onClick={() => setFlashes((ids) => [...ids, Date.now()])}>
          Show a React flash
        </button>
      </div>
      {flashes.map((id) => (
        <Alert.Root key={id} variant="warning" tone="filled" flash>
          <Alert.Icon name="warning" />
          <Alert.Messages>
            <Alert.Description>A flash from React.</Alert.Description>
          </Alert.Messages>
          <Alert.Close />
        </Alert.Root>
      ))}
    </>
  )
}

createRoot(document.getElementById('react-alerts')).render(<ReactAlerts />)

createRoot(document.getElementById('react-card')).render(
  <Alert.Root variant="notice">
    <Alert.Icon name="celebration" />
    <Alert.Messages>
      <Alert.Title>Card</Alert.Title>
      <Alert.Description>More padding, a large radius, no border, and a shadow.</Alert.Description>
    </Alert.Messages>
    <Alert.Close />
  </Alert.Root>
)
