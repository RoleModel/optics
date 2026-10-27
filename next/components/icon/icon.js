import { OpticsElement } from '../../shared/optics-element.js'
import { iconGlyph } from './glyph.js'

// Web component version of icon.spec.json:
//
// <op-icon name="settings" size="large"></op-icon>
// <op-icon label="Favorite"><svg viewBox="0 0 24 24">…</svg></op-icon>
//
// A decorator: it adds classes and ARIA to itself. With a name, it owns its content: the
// name as text for Material Symbols, or the app's pack classes and no text for the others
// (see setIconPack in glyph.js). With no name, it keeps the children the author wrote.
class OpIcon extends OpticsElement {
  static block = 'icon'
  static properties = {
    name: { reflect: true },
    label: { reflect: true },
    size: { reflect: true, modifier: true },
    weight: { reflect: true, modifier: (weight) => `weight-${weight}` },
    emphasis: { reflect: true, modifier: (emphasis) => `${emphasis}-emphasis` },
    filled: { type: Boolean, reflect: true, modifier: true },
    duotone: { type: Boolean, reflect: true },
  }

  #glyphClasses = []

  // It renders nothing and sets its own text, which would remove the marker Lit keeps in
  // its render root. Lit's dev build then throws on the next update.
  createRenderRoot() {
    return document.createDocumentFragment()
  }

  updated() {
    const glyph = iconGlyph(this)
    this.classList.remove(...this.#glyphClasses)
    this.classList.add(...glyph.classes)
    this.#glyphClasses = glyph.classes

    const text = glyph.text ?? ''
    if (this.name && this.textContent !== text) this.textContent = text

    if (this.label) {
      this.setAttribute('role', 'img')
      this.setAttribute('aria-label', this.label)
      this.removeAttribute('aria-hidden')
    } else {
      this.removeAttribute('role')
      this.removeAttribute('aria-label')
      this.setAttribute('aria-hidden', 'true')
    }
  }
}

if (!customElements.get('op-icon')) customElements.define('op-icon', OpIcon)
