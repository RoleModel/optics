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
await import('./alert.js')

const spec = JSON.parse(readFileSync(new URL('./alert.spec.json', import.meta.url)))
const css = readFileSync(new URL('./alert.css', import.meta.url), 'utf8')

const MARKUP = `
  <op-alert variant="warning" tone="muted">
    <op-icon name="warning"></op-icon>
    <op-alert-messages>
      <op-alert-title>Heads up</op-alert-title>
      <op-alert-description>Your trial ends tomorrow.</op-alert-description>
    </op-alert-messages>
    <op-alert-close></op-alert-close>
  </op-alert>`

const alert = () => document.querySelector('op-alert')
const icon = () => document.querySelector('op-icon.alert__icon')
const closeButton = () => document.querySelector('op-alert-close button')

async function settled() {
  await alert().updateComplete
  await document.querySelector('op-alert-close').updateComplete
  await icon()?.updateComplete
}

describe('<op-alert>', () => {
  beforeEach(async () => {
    document.body.innerHTML = MARKUP
    await settled()
  })

  test('gives each part its BEM classes and modifiers', async () => {
    assert.ok(alert().matches('.alert.alert--warning.alert--muted:not(.alert--flash)'))
    assert.ok(document.querySelector('op-alert-messages').matches('.alert__messages'))
    assert.ok(document.querySelector('op-alert-title').matches('.alert__title'))
    assert.ok(document.querySelector('op-alert-description').matches('.alert__description'))

    Object.assign(alert(), { variant: 'alert', tone: undefined, flash: true })
    await settled()
    assert.ok(alert().matches('.alert--alert.alert--flash:not(.alert--warning, .alert--muted)'))
  })

  test('has no modifiers when it has no attributes', async () => {
    document.body.innerHTML = '<op-alert></op-alert>'
    alert().requestUpdate()
    await alert().updateComplete
    assert.equal(alert().className, 'alert')
  })

  test('has role="alert" unless the author sets a role', async () => {
    assert.equal(alert().getAttribute('role'), 'alert')

    document.body.innerHTML = '<op-alert role="status"></op-alert>'
    await alert().updateComplete
    assert.equal(alert().getAttribute('role'), 'status')
  })

  test('makes a direct op-icon a large, bold alert icon unless the author sets them', async () => {
    assert.ok(icon().matches('.icon--large.icon--weight-bold'))

    document.body.innerHTML = '<op-alert><op-icon name="info" size="small"></op-icon></op-alert>'
    await alert().updateComplete
    await icon().updateComplete
    assert.ok(icon().matches('.icon--small.icon--weight-bold'))
  })

  test('renders a close button with a label', async () => {
    assert.equal(closeButton().getAttribute('aria-label'), 'Dismiss')
    assert.ok(closeButton().matches('.alert__close'))

    document.querySelector('op-alert-close').label = 'Close message'
    await settled()
    assert.equal(closeButton().getAttribute('aria-label'), 'Close message')
  })

  test('the close button removes the alert and sends op-alert-dismiss', () => {
    let dismissed = false
    document.body.addEventListener('op-alert-dismiss', () => (dismissed = true), { once: true })
    closeButton().click()
    assert.ok(dismissed)
    assert.equal(alert(), null)
  })

  test('stays when a listener cancels op-alert-dismiss', () => {
    alert().addEventListener('op-alert-dismiss', (event) => event.preventDefault())
    closeButton().click()
    assert.ok(alert())
  })

  test('a flash alert removes itself when its own animation ends', async () => {
    document.querySelector('op-alert-title').dispatchEvent(new window.Event('animationend', { bubbles: true }))
    alert().dispatchEvent(new window.Event('animationend'))
    assert.ok(alert(), 'not a flash')

    alert().flash = true
    await settled()
    document.querySelector('op-alert-title').dispatchEvent(new window.Event('animationend', { bubbles: true }))
    assert.ok(alert(), 'a child animation')

    alert().dispatchEvent(new window.Event('animationend'))
    assert.equal(alert(), null)
  })

  test('the close button of a nested alert removes only that alert', async () => {
    document.body.innerHTML =
      '<op-alert id="outer"><op-alert id="inner"><op-alert-close></op-alert-close></op-alert></op-alert>'
    await settled()
    closeButton().click()
    assert.ok(document.getElementById('outer'))
    assert.equal(document.getElementById('inner'), null)
  })
})

describe('alert.spec.json', () => {
  test('alert.css styles every class and modifier', () => {
    const classes = [...Object.values(spec.parts).map((part) => part.class), ...Object.keys(spec.modifiers)]
    assert.deepEqual(
      classes.filter((name) => !css.includes(`.${name}`)),
      []
    )
  })

  test('alert.css sets every custom property', () => {
    const names = Object.values(spec.customProperties).flatMap(Object.keys)
    assert.deepEqual(
      names.filter((name) => !css.includes(`${name}:`)),
      []
    )
  })

  test('lists every local variable alert.css declares', () => {
    const listed = new Set(Object.values(spec.customProperties).flatMap(Object.keys))
    const declared = new Set([...css.matchAll(/(--op-alert[\w-]*):/g)].map((match) => match[1]))
    assert.deepEqual(
      [...declared].filter((name) => !listed.has(name)),
      []
    )
  })
})

describe('alert.css', () => {
  test('has no magic numbers or colors: every value is a token or 0', () => {
    const values = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/--[\w-]+/g, '')
    const literals = [...values.matchAll(/#[0-9a-f]{3,8}\b|-?\d*\.?\d+[a-z%]*/gi)].map((match) => match[0])
    assert.deepEqual(
      literals.filter((literal) => literal !== '0'),
      []
    )
  })
})
