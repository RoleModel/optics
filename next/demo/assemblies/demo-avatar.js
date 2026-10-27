import { html, nothing } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'
import '../../components/avatar/avatar.js'
import { initials } from './initials.js'

// The demo app's avatar for a person. It makes the alt text and the initials from the name:
//
// <demo-avatar name="Jane Cooper" src="/jane.jpg" size="small"></demo-avatar>
class DemoAvatar extends OpticsElement {
  static properties = {
    name: {},
    src: {},
    size: {},
    disabled: { type: Boolean },
  }

  render() {
    return html`<op-avatar size=${this.size ?? nothing} ?disabled=${this.disabled}>
      ${this.src ? html`<img src=${this.src} alt=${this.name} />` : nothing}
      <op-avatar-fallback>${initials(this.name)}</op-avatar-fallback>
    </op-avatar>`
  }
}

if (!customElements.get('demo-avatar')) customElements.define('demo-avatar', DemoAvatar)
