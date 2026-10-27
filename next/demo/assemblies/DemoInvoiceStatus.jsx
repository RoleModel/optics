import { Badge } from '../../components/badge/Badge.jsx'
import { invoiceStatus } from './invoice-statuses.js'

// React version of demo-invoice-status.js:
//
// <DemoInvoiceStatus status="paid" />
export function DemoInvoiceStatus({ status, ...props }) {
  const { label, variant } = invoiceStatus(status)
  return (
    <Badge variant={variant} pill {...props}>
      {label}
    </Badge>
  )
}
