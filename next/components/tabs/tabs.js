import { OpticsElement } from '../../shared/optics-element.js'
import { RovingFocusController } from '../../shared/roving-focus-controller.js'

// Web component version of tabs.spec.json. Compose the parts:
//
// <op-tabs value="orders">
//   <op-tabs-list size="small">
//     <op-tabs-tab value="orders">Orders</op-tabs-tab>
//   </op-tabs-list>
//   <op-tabs-panel value="orders">…</op-tabs-panel>
// </op-tabs>
//
// A decorator: it renders nothing and adds classes, ARIA, and behavior to the parts the
// author wrote. <op-tabs> owns the state and sets every part in updated(). The other parts
// only ask it to update when they connect; Lit batches those into one update.
class OpTabs extends OpticsElement {
  static properties = { value: { reflect: true } }
  static #count = 0

  constructor() {
    super()
    this.addEventListener('click', this.#onClick)
    new RovingFocusController(this, {
      items: () => this.#enabledTabs(),
      current: () => this.#tab(this.#selected),
      onMove: (tab) => this.#select(tab),
    })
  }

  connectedCallback() {
    super.connectedCallback()
    this.id ||= `op-tabs-${++OpTabs.#count}`
  }

  updated() {
    const selected = this.#selected
    this.classList.add('tabs')

    for (const list of this.#own('op-tabs-list')) {
      const size = list.getAttribute('size')
      list.setAttribute('role', 'tablist')
      list.classList.add('tabs__list')
      list.classList.toggle('tabs__list--small', size === 'small')
      list.classList.toggle('tabs__list--large', size === 'large')
    }

    for (const tab of this.#own('op-tabs-tab')) {
      const value = tab.getAttribute('value')
      const active = value === selected
      const disabled = tab.hasAttribute('disabled')

      tab.id = `${this.id}-tab-${value}`
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-controls', `${this.id}-panel-${value}`)
      tab.setAttribute('aria-selected', active)
      tab.toggleAttribute('aria-disabled', disabled)
      if (disabled) tab.tabIndex = -1
      tab.classList.add('tabs__tab')
      tab.classList.toggle('tabs__tab--active', active)
      tab.classList.toggle('tabs__tab--disabled', disabled)
    }

    for (const panel of this.#own('op-tabs-panel')) {
      const value = panel.getAttribute('value')
      panel.id = `${this.id}-panel-${value}`
      panel.setAttribute('role', 'tabpanel')
      panel.setAttribute('aria-labelledby', `${this.id}-tab-${value}`)
      panel.tabIndex = 0
      panel.hidden = value !== selected
      panel.classList.add('tabs__panel')
    }
  }

  // The value attribute, or the first enabled tab.
  get #selected() {
    return this.value ?? this.#enabledTabs()[0]?.getAttribute('value')
  }

  // Parts of this <op-tabs>, not of tabs nested in its panels.
  #own(selector) {
    return [...this.querySelectorAll(selector)].filter((element) => element.closest('op-tabs') === this)
  }

  #enabledTabs() {
    return this.#own('op-tabs-tab').filter((tab) => !tab.hasAttribute('disabled'))
  }

  #tab(value) {
    return this.#own('op-tabs-tab').find((tab) => tab.getAttribute('value') === value)
  }

  #select(tab) {
    const value = tab.getAttribute('value')
    if (value === this.#selected) return
    this.value = value
    this.emit('op-tabs-change', { value })
  }

  #onClick = (event) => {
    const tab = event.target.closest('op-tabs-tab')
    if (this.#enabledTabs().includes(tab)) this.#select(tab)
  }
}

class OpTabsPart extends OpticsElement {
  connectedCallback() {
    super.connectedCallback()
    this.closest('op-tabs')?.requestUpdate()
  }
}

const elements = {
  'op-tabs': OpTabs,
  'op-tabs-list': class OpTabsList extends OpTabsPart {},
  'op-tabs-tab': class OpTabsTab extends OpTabsPart {},
  'op-tabs-panel': class OpTabsPanel extends OpTabsPart {},
}

for (const [name, element] of Object.entries(elements)) {
  if (!customElements.get(name)) customElements.define(name, element)
}
