import { OpticsElement } from '../../shared/optics-element.js'
import '../icon/icon.js'

// Web component version of badge.spec.json:
//
// <op-badge variant="notice" pill>Paid</op-badge>
// <op-badge variant="primary"><op-icon name="add"></op-icon> New</op-badge>
//
// A decorator: it renders nothing and adds classes to itself and to each direct <op-icon>.
class OpBadge extends OpticsElement {
  static properties = {
    variant: { reflect: true },
    pill: { type: Boolean, reflect: true },
    notification: { reflect: true },
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
    this.classList.add('badge')
    for (const variant of ['primary', 'warning', 'danger', 'info', 'notice']) {
      this.classList.toggle(`badge--${variant}`, this.variant === variant)
    }
    // toggle() with undefined flips the class, so force a boolean.
    this.classList.toggle('badge--pill', Boolean(this.pill))
    for (const side of ['left', 'right']) {
      this.classList.toggle(`badge--notification-${side}`, this.notification === side)
    }

    for (const icon of this.querySelectorAll(':scope > op-icon')) icon.classList.add('badge__icon')
  }
}

if (!customElements.get('op-badge')) customElements.define('op-badge', OpBadge)
