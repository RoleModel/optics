import { html } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'
import '../icon/icon.js'

// Web component version of alert.spec.json. Compose the parts:
//
// <op-alert variant="warning">
//   <op-icon name="warning"></op-icon>
//   <op-alert-messages>
//     <op-alert-title>Heads up</op-alert-title>
//     <op-alert-description>Your trial ends tomorrow.</op-alert-description>
//   </op-alert-messages>
//   <op-alert-close></op-alert-close>
// </op-alert>
//
// A decorator: <op-alert> renders nothing and adds classes and a role to the parts the author
// wrote. Only <op-alert-close> renders, a native <button>, so it gets focus and keys for free.
class OpAlert extends OpticsElement {
  static properties = {
    variant: { reflect: true },
    tone: { reflect: true },
    flash: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this.addEventListener('click', (event) => {
      if (this.#own(event.target.closest('op-alert-close'))) this.dismiss()
    })
    // animationend bubbles, so skip the ones from children.
    this.addEventListener('animationend', (event) => {
      if (event.target === this && this.flash) this.dismiss()
    })
  }

  // Removes the alert, unless a listener cancels op-alert-dismiss.
  dismiss() {
    if (this.emit('op-alert-dismiss', null, { cancelable: true })) this.remove()
  }

  updated() {
    this.classList.add('alert')
    for (const variant of ['warning', 'danger', 'alert', 'info', 'notice']) {
      this.classList.toggle(`alert--${variant}`, this.variant === variant)
    }
    for (const tone of ['outlined', 'muted', 'filled']) {
      this.classList.toggle(`alert--${tone}`, this.tone === tone)
    }
    // toggle() with undefined flips the class, so force a boolean.
    this.classList.toggle('alert--flash', Boolean(this.flash))
    if (!this.hasAttribute('role')) this.setAttribute('role', 'alert')

    for (const icon of this.querySelectorAll(':scope > op-icon')) {
      icon.classList.add('alert__icon')
      icon.size ??= 'large'
      icon.weight ??= 'bold'
    }

    for (const [tag, className] of Object.entries(PART_CLASSES)) {
      for (const part of this.querySelectorAll(tag)) {
        if (this.#own(part)) part.classList.add(className)
      }
    }
  }

  // A part of this <op-alert>, not of an alert nested in it.
  #own(part) {
    return part?.closest('op-alert') === this
  }
}

const PART_CLASSES = {
  'op-alert-messages': 'alert__messages',
  'op-alert-title': 'alert__title',
  'op-alert-description': 'alert__description',
}

class OpAlertPart extends OpticsElement {
  connectedCallback() {
    super.connectedCallback()
    this.closest('op-alert')?.requestUpdate()
  }
}

class OpAlertClose extends OpAlertPart {
  static properties = { label: {} }

  render() {
    return html`<button type="button" class="alert__close" aria-label=${this.label ?? 'Dismiss'}>
      <op-icon name="close"></op-icon>
    </button>`
  }
}

const elements = {
  'op-alert': OpAlert,
  'op-alert-messages': class OpAlertMessages extends OpAlertPart {},
  'op-alert-title': class OpAlertTitle extends OpAlertPart {},
  'op-alert-description': class OpAlertDescription extends OpAlertPart {},
  'op-alert-close': OpAlertClose,
}

for (const [name, element] of Object.entries(elements)) {
  if (!customElements.get(name)) customElements.define(name, element)
}
