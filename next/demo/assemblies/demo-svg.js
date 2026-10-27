import { html } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'

const PATHS = {
  heart:
    'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
}

// The demo app's own SVG icons. Put one in an <op-icon> with no name:
//
// <op-icon size="large"><demo-svg name="heart"></demo-svg></op-icon>
class DemoSvg extends OpticsElement {
  static properties = { name: {} }

  render() {
    return html`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke-width="2" d=${PATHS[this.name]} />
    </svg>`
  }
}

if (!customElements.get('demo-svg')) customElements.define('demo-svg', DemoSvg)
