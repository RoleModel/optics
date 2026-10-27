import { Alert } from '../../components/alert/Alert.jsx'
import { alertIcon } from './alert-icon.js'

// React version of demo-alert.js:
//
// <DemoAlert variant="warning" heading="Warning" description="Your trial ends tomorrow." />
export function DemoAlert({ heading, description, icon, ...props }) {
  return (
    <Alert.Root {...props}>
      <Alert.Icon name={icon ?? alertIcon(props.variant)} />
      <Alert.Messages>
        {heading && <Alert.Title>{heading}</Alert.Title>}
        <Alert.Description>{description}</Alert.Description>
      </Alert.Messages>
      <Alert.Close />
    </Alert.Root>
  )
}
