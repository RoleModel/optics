import { html, nothing } from 'lit'
import { OpticsElement } from '../../shared/optics-element.js'
import '../../components/alert/alert.js'
import { alertIcon } from './alert-icon.js'

// The demo app's alert. It picks the icon from the variant and can always be dismissed:
//
// <demo-alert variant="warning" heading="Warning" description="Your trial ends tomorrow."></demo-alert>
//
// heading and not title: a title attribute would show as a tooltip on the whole alert.
class DemoAlert extends OpticsElement {
  static properties = {
    variant: {},
    tone: {},
    flash: { type: Boolean },
    heading: {},
    description: {},
    icon: {},
  }

  render() {
    return html`<op-alert variant=${this.variant ?? nothing} tone=${this.tone ?? nothing} ?flash=${this.flash}>
      <op-icon name=${this.icon ?? alertIcon(this.variant)}></op-icon>
      <op-alert-messages>
        ${this.heading ? html`<op-alert-title>${this.heading}</op-alert-title>` : nothing}
        <op-alert-description>${this.description}</op-alert-description>
      </op-alert-messages>
      <op-alert-close></op-alert-close>
    </op-alert>`
  }
}

if (!customElements.get('demo-alert')) customElements.define('demo-alert', DemoAlert)
