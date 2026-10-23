import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { beforeEach, describe, test } from 'node:test'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM()
Object.assign(globalThis, {
  document: window.document,
  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  CustomEvent: window.CustomEvent,
})
await import('./tabs.js')

const spec = JSON.parse(readFileSync(new URL('./tabs.spec.json', import.meta.url)))
const css = readFileSync(new URL('./tabs.css', import.meta.url), 'utf8')

const MARKUP = `
  <op-tabs id="outer">
    <op-tabs-list size="small">
      <op-tabs-tab value="one">One</op-tabs-tab>
      <op-tabs-tab value="two">Two</op-tabs-tab>
      <op-tabs-tab value="three" disabled>Three</op-tabs-tab>
      <op-tabs-tab value="four">Four</op-tabs-tab>
    </op-tabs-list>
    <op-tabs-panel value="one">One</op-tabs-panel>
    <op-tabs-panel value="two">Two</op-tabs-panel>
    <op-tabs-panel value="three">Three</op-tabs-panel>
    <op-tabs-panel value="four">
      <op-tabs id="inner">
        <op-tabs-list>
          <op-tabs-tab value="nested">Nested</op-tabs-tab>
        </op-tabs-list>
        <op-tabs-panel value="nested">Nested</op-tabs-panel>
      </op-tabs>
    </op-tabs-panel>
  </op-tabs>`

const tab = (value) => document.querySelector(`op-tabs-tab[value="${value}"]`)
const panel = (value) => document.querySelector(`op-tabs-panel[value="${value}"]`)
const press = (element, key) =>
  element.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))
// Lit updates after a microtask, so wait for every <op-tabs> before checking the DOM.
const settled = () => Promise.all([...document.querySelectorAll('op-tabs')].map((element) => element.updateComplete))

function assertSelected(value) {
  for (const each of ['one', 'two', 'three', 'four']) {
    const selected = each === value
    assert.equal(tab(each).getAttribute('aria-selected'), String(selected), `${each} aria-selected`)
    assert.equal(tab(each).classList.contains('tabs__tab--active'), selected, `${each} tabs__tab--active`)
    assert.equal(tab(each).tabIndex, selected ? 0 : -1, `${each} tabindex`)
    assert.equal(panel(each).hidden, !selected, `${each} panel hidden`)
  }
}

describe('<op-tabs>', () => {
  beforeEach(async () => {
    document.body.innerHTML = MARKUP
    await settled()
  })

  test('gives each part its BEM classes and ARIA, selecting the first enabled tab', () => {
    assert.ok(document.getElementById('outer').matches('.tabs'))
    assert.ok(document.querySelector('op-tabs-list').matches('.tabs__list.tabs__list--small[role="tablist"]'))
    assert.ok(tab('one').matches('.tabs__tab[role="tab"]'))
    assert.ok(tab('three').matches('.tabs__tab--disabled[aria-disabled]'))
    assert.equal(document.getElementById(tab('two').getAttribute('aria-controls')), panel('two'))
    assert.equal(document.getElementById(panel('two').getAttribute('aria-labelledby')), tab('two'))
    assertSelected('one')
  })

  test('selects a tab on click, reflects value, and sends op-tabs-change', async () => {
    const changes = []
    document.body.addEventListener('op-tabs-change', (event) => changes.push(event.detail.value))
    tab('two').click()
    tab('three').click()
    await settled()
    assertSelected('two')
    assert.equal(document.getElementById('outer').getAttribute('value'), 'two')
    assert.deepEqual(changes, ['two'])
  })

  test('arrow keys select the next tab, skipping disabled and wrapping', async () => {
    press(tab('two'), 'ArrowRight')
    await settled()
    assertSelected('four')
    assert.equal(document.activeElement, tab('four'))

    press(tab('four'), 'ArrowDown')
    await settled()
    assertSelected('one')

    press(tab('one'), 'ArrowLeft')
    await settled()
    assertSelected('four')
  })

  test('Home and End select the first and last enabled tab', async () => {
    press(tab('one'), 'End')
    await settled()
    assertSelected('four')
    press(tab('four'), 'Home')
    await settled()
    assertSelected('one')
  })

  test('setting value selects that tab', async () => {
    document.getElementById('outer').value = 'two'
    await settled()
    assertSelected('two')
  })

  test('nested tabs do not change the outer tabs', async () => {
    tab('nested').click()
    press(tab('nested'), 'ArrowRight')
    await settled()
    assertSelected('one')
  })
})

describe('tabs.spec.json', () => {
  test('tabs.css styles every class and modifier', () => {
    const classes = [
      ...Object.values(spec.parts)
        .map((part) => part.class)
        .filter(Boolean),
      ...Object.keys(spec.modifiers),
    ]
    assert.deepEqual(
      classes.filter((name) => !css.includes(`.${name}`)),
      []
    )
  })

  test('tabs.css sets every custom property', () => {
    const names = Object.values(spec.customProperties).flatMap(Object.keys)
    assert.deepEqual(
      names.filter((name) => !css.includes(`${name}:`)),
      []
    )
  })

  test('lists every local variable tabs.css declares', () => {
    const listed = new Set(Object.values(spec.customProperties).flatMap(Object.keys))
    const declared = new Set([...css.matchAll(/(--op-tab[\w-]*):/g)].map((match) => match[1]))
    assert.deepEqual(
      [...declared].filter((name) => !listed.has(name)),
      []
    )
  })
})

describe('tabs.css', () => {
  test('has no magic numbers or colors: every value is a token, 0, or -1 in calc()', () => {
    const values = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/--[\w-]+/g, '')
    const literals = [...values.matchAll(/#[0-9a-f]{3,8}\b|-?\d*\.?\d+[a-z%]*/gi)].map((match) => match[0])
    assert.deepEqual(
      literals.filter((literal) => literal !== '0' && literal !== '-1'),
      []
    )
  })
})
