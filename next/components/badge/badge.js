import { OpticsElement } from '../../shared/optics-element.js'
import '../icon/icon.js'

// Web component version of badge.spec.json:
//
// <op-badge variant="notice" pill>Paid</op-badge>
// <op-badge variant="primary"><op-icon name="add"></op-icon> New</op-badge>
//
// A decorator: it renders nothing and adds classes to itself and to each direct <op-icon>.
class OpBadge extends OpticsElement {
  static block = 'badge'
  static properties = {
    variant: { reflect: true, modifier: true },
    pill: { type: Boolean, reflect: true, modifier: true },
    notification: { reflect: true, modifier: (side) => `notification-${side}` },
  }

  #observer = new MutationObserver(() => this.requestUpdate())

  // An app sets a count with textContent, which would remove the marker Lit keeps in its
  // render root. Lit's dev build then throws on the next update.
  createRenderRoot() {
    return document.createDocumentFragment()
  }

  connectedCallback() {
    super.connectedCallback()
    this.#observer.observe(this, { childList: true })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#observer.disconnect()
  }

  updated() {
    for (const icon of this.querySelectorAll(':scope > op-icon')) icon.classList.add('badge__icon')
  }
}

if (!customElements.get('op-badge')) customElements.define('op-badge', OpBadge)
