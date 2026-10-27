import assert from 'node:assert/strict'
import { beforeEach, describe, test } from 'node:test'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM()
Object.assign(globalThis, {
  document: window.document,
  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  CustomEvent: window.CustomEvent,
})
const { OpticsElement } = await import('./optics-element.js')

customElements.define(
  'test-chip',
  class extends OpticsElement {
    static block = 'chip'
    static properties = {
      variant: { reflect: true, modifier: true },
      pill: { type: Boolean, reflect: true, modifier: true },
      weight: { reflect: true, modifier: (weight) => `weight-${weight}` },
      label: {},
    }
  }
)

customElements.define(
  'test-plain',
  class extends OpticsElement {
    static properties = { variant: { modifier: true } }
  }
)

const chip = () => document.querySelector('test-chip')

async function render(markup) {
  document.body.innerHTML = markup
  await document.body.firstElementChild.updateComplete
}

describe('OpticsElement modifiers', () => {
  beforeEach(() => render('<test-chip variant="info" pill weight="bold" label="Hi"></test-chip>'))

  test('adds the block class and a class for each modifier', () => {
    assert.equal(chip().className, 'chip chip--info chip--pill chip--weight-bold')
  })

  test('swaps the class when a value changes, and removes it when the value goes', async () => {
    Object.assign(chip(), { variant: 'danger', pill: false, weight: undefined })
    await chip().updateComplete
    assert.equal(chip().className, 'chip chip--danger')
  })

  test('gives any value a class, so an app variant works', async () => {
    chip().variant = 'brand'
    await chip().updateComplete
    assert.ok(chip().classList.contains('chip--brand'))
  })

  test('adds no class for a missing, empty, or false value', async () => {
    await render('<test-chip variant=""></test-chip>')
    assert.equal(chip().className, 'chip')
  })

  test('keeps the classes the author wrote', async () => {
    await render('<test-chip class="chip--brand mine" variant="info"></test-chip>')
    chip().variant = 'danger'
    await chip().updateComplete
    assert.equal(chip().className, 'chip--brand mine chip chip--danger')
  })

  test('adds no classes without a block', async () => {
    await render('<test-plain variant="info"></test-plain>')
    assert.equal(document.querySelector('test-plain').className, '')
  })
})
