import { OpticsElement } from '../../shared/optics-element.js'

// Web component version of avatar.spec.json. Compose the parts:
//
// <op-avatar size="small">
//   <img src="/jane.jpg" alt="Jane Cooper">
//   <op-avatar-fallback>JC</op-avatar-fallback>
// </op-avatar>
//
// A decorator: it renders nothing and adds classes to the parts the author wrote. It shows
// the fallback until the image loads, and keeps it when the image fails.
class OpAvatar extends OpticsElement {
  static properties = {
    size: { reflect: true },
    disabled: { type: Boolean, reflect: true },
  }

  #observer = new MutationObserver(() => this.requestUpdate())

  constructor() {
    super()
    // load and error do not bubble, so catch them on the way down.
    this.addEventListener('load', () => this.requestUpdate(), true)
    this.addEventListener('error', () => this.requestUpdate(), true)
  }

  connectedCallback() {
    super.connectedCallback()
    this.#observer.observe(this, { subtree: true, childList: true, attributeFilter: ['src'] })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#observer.disconnect()
  }

  updated() {
    const loaded = this.#status === 'loaded'

    this.classList.add('avatar')
    for (const size of ['small', 'medium', 'large']) {
      this.classList.toggle(`avatar--${size}`, this.size === size)
    }
    this.classList.toggle('avatar--disabled', this.disabled)

    if (this.#image) {
      this.#image.classList.add('avatar__image')
      this.#image.hidden = !loaded
    }

    for (const fallback of this.querySelectorAll('op-avatar-fallback')) {
      fallback.classList.add('avatar__fallback')
      fallback.hidden = loaded
    }
  }

  get #image() {
    return this.querySelector('img')
  }

  // Read from the image each update, so a new src starts over.
  get #status() {
    const image = this.#image
    if (!image?.getAttribute('src')) return 'error'
    if (!image.complete) return 'loading'
    return image.naturalWidth > 0 ? 'loaded' : 'error'
  }
}

const elements = {
  'op-avatar': OpAvatar,
  'op-avatar-fallback': class OpAvatarFallback extends OpticsElement {},
}

for (const [name, element] of Object.entries(elements)) {
  if (!customElements.get(name)) customElements.define(name, element)
}
