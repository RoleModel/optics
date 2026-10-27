import { html, nothing } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'

const PAGES = {
  'index.html': 'Tabs',
  'avatar.html': 'Avatar',
  'icon.html': 'Icon',
  'alert.html': 'Alert',
}

// The demo app's page nav. It marks the current page:
//
// <demo-nav></demo-nav>
class DemoNav extends OpticsElement {
  render() {
    const current = location.pathname.split('/').pop() || 'index.html'
    return html`<nav class="op-cluster">
      ${Object.entries(PAGES).map(
        ([page, label]) => html`<a href="./${page}" aria-current=${page === current ? 'page' : nothing}>${label}</a>`
      )}
    </nav>`
  }
}

if (!customElements.get('demo-nav')) customElements.define('demo-nav', DemoNav)
