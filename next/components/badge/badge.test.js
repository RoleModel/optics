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
  MutationObserver: window.MutationObserver,
})
await import('./badge.js')

const spec = JSON.parse(readFileSync(new URL('./badge.spec.json', import.meta.url)))
const css = readFileSync(new URL('./badge.css', import.meta.url), 'utf8')

const badge = () => document.querySelector('op-badge')

// The MutationObserver and Lit both update after a microtask.
async function settled() {
  await null
  await badge().updateComplete
}

describe('<op-badge>', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<op-badge variant="notice" pill notification="right">3</op-badge>'
    await settled()
  })

  test('adds its BEM classes and modifiers', async () => {
    assert.ok(badge().matches('.badge.badge--notice.badge--pill.badge--notification-right'))

    Object.assign(badge(), { variant: 'danger', pill: undefined, notification: 'left' })
    await settled()
    assert.ok(badge().matches('.badge--danger.badge--notification-left'))
    assert.ok(badge().matches(':not(.badge--notice, .badge--pill, .badge--notification-right)'))
  })

  test('has no modifiers when it has no attributes', async () => {
    document.body.innerHTML = '<op-badge>New</op-badge>'
    await settled()
    assert.equal(badge().className, 'badge')
  })

  test('keeps the text the author wrote', () => {
    assert.equal(badge().textContent, '3')
  })

  test('makes each direct op-icon a badge icon, also one added later', async () => {
    document.body.innerHTML = '<op-badge><op-icon name="add"></op-icon> New <span><op-icon></op-icon></span></op-badge>'
    await settled()
    assert.equal(document.querySelectorAll('.badge__icon').length, 1)

    badge().append(document.createElement('op-icon'))
    await settled()
    assert.equal(document.querySelectorAll('.badge__icon').length, 2)
    assert.ok(document.querySelector('span > op-icon:not(.badge__icon)'))
  })
})

describe('badge.spec.json', () => {
  test('badge.css styles every class and modifier', () => {
    const classes = [...Object.values(spec.parts).map((part) => part.class), ...Object.keys(spec.modifiers)]
    assert.deepEqual(
      classes.filter((name) => !css.includes(`.${name}`)),
      []
    )
  })

  test('badge.css sets every custom property', () => {
    const names = Object.values(spec.customProperties).flatMap(Object.keys)
    assert.deepEqual(
      names.filter((name) => !css.includes(`${name}:`)),
      []
    )
  })

  test('lists every local variable badge.css declares', () => {
    const listed = new Set(Object.values(spec.customProperties).flatMap(Object.keys))
    const declared = new Set([...css.matchAll(/(--op-badge[\w-]*):/g)].map((match) => match[1]))
    assert.deepEqual(
      [...declared].filter((name) => !listed.has(name)),
      []
    )
  })
})

describe('badge.css', () => {
  test('has no magic numbers or colors: every value is a token, 0, or a half-size shift', () => {
    const values = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/--[\w-]+/g, '')
    const literals = [...values.matchAll(/#[0-9a-f]{3,8}\b|-?\d*\.?\d+[a-z%]*/gi)].map((match) => match[0])
    assert.deepEqual(
      literals.filter((literal) => !['0', '50%', '-50%'].includes(literal)),
      []
    )
  })
})
