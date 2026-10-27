import { html, nothing } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'
import '../../components/badge/badge.js'
import { invoiceStatus } from './invoice-statuses.js'

// The demo app's invoice status. It picks the label and color from the status:
//
// <demo-invoice-status status="paid"></demo-invoice-status>
class DemoInvoiceStatus extends OpticsElement {
  static properties = { status: {} }

  render() {
    const { label, variant } = invoiceStatus(this.status)
    return html`<op-badge variant=${variant ?? nothing} pill>${label}</op-badge>`
  }
}

if (!customElements.get('demo-invoice-status')) customElements.define('demo-invoice-status', DemoInvoiceStatus)
