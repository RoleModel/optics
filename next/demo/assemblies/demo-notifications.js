import { html, nothing } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'
import '../../components/badge/badge.js'
import '../../components/icon/icon.js'
import { notificationCount } from './notification-count.js'

// The demo app's notifications button. It shows the unread count on its corner, hides the
// badge at 0, caps it at 99+, and names the button with the full count:
//
// <demo-notifications count="3"></demo-notifications>
class DemoNotifications extends OpticsElement {
  static properties = { count: { type: Number } }

  render() {
    const { badge, label } = notificationCount(this.count)
    return html`<button type="button" class="notification-button" aria-label=${label}>
      <op-icon name="notifications"></op-icon>
      ${badge ? html`<op-badge variant="danger" pill notification="right">${badge}</op-badge>` : nothing}
    </button>`
  }
}

if (!customElements.get('demo-notifications')) customElements.define('demo-notifications', DemoNotifications)
