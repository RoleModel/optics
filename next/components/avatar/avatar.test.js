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
await import('./avatar.js')

const spec = JSON.parse(readFileSync(new URL('./avatar.spec.json', import.meta.url)))
const css = readFileSync(new URL('./avatar.css', import.meta.url), 'utf8')

const MARKUP = `
  <op-avatar size="small">
    <img src="/jane.jpg" alt="Jane Cooper">
    <op-avatar-fallback>JC</op-avatar-fallback>
  </op-avatar>`

const avatar = () => document.querySelector('op-avatar')
const image = () => document.querySelector('img')
const fallback = () => document.querySelector('op-avatar-fallback')

// jsdom never loads images, so set what a browser would report.
function setImage({ complete, naturalWidth = 0 }) {
  Object.defineProperty(image(), 'complete', { value: complete, configurable: true })
  Object.defineProperty(image(), 'naturalWidth', { value: naturalWidth, configurable: true })
}

// The MutationObserver and Lit both update after a microtask.
async function settled() {
  await null
  await avatar().updateComplete
}

function assertShowing(part) {
  assert.equal(image().hidden, part !== 'image', 'image hidden')
  assert.equal(fallback().hidden, part === 'image', 'fallback hidden')
}

describe('<op-avatar>', () => {
  beforeEach(() => {
    document.body.innerHTML = MARKUP
  })

  test('gives each part its BEM classes and modifiers', async () => {
    avatar().disabled = true
    await settled()
    assert.ok(avatar().matches('.avatar.avatar--small.avatar--disabled'))
    assert.ok(image().matches('.avatar__image'))
    assert.ok(fallback().matches('.avatar__fallback'))

    avatar().size = 'large'
    avatar().disabled = false
    await settled()
    assert.ok(avatar().matches('.avatar--large:not(.avatar--small, .avatar--disabled)'))
  })

  test('shows the fallback while the image loads, then the image', async () => {
    setImage({ complete: false })
    await settled()
    assertShowing('fallback')

    setImage({ complete: true, naturalWidth: 400 })
    image().dispatchEvent(new window.Event('load'))
    await settled()
    assertShowing('image')
  })

  test('keeps the fallback when the image fails', async () => {
    setImage({ complete: false })
    await settled()
    setImage({ complete: true, naturalWidth: 0 })
    image().dispatchEvent(new window.Event('error'))
    await settled()
    assertShowing('fallback')
  })

  test('shows the fallback when the image has no src', async () => {
    image().removeAttribute('src')
    await settled()
    assertShowing('fallback')
  })

  test('a new src shows the fallback until it loads', async () => {
    setImage({ complete: true, naturalWidth: 400 })
    image().dispatchEvent(new window.Event('load'))
    await settled()
    assertShowing('image')

    setImage({ complete: false })
    image().setAttribute('src', '/john.jpg')
    await settled()
    assertShowing('fallback')
  })
})

describe('avatar.spec.json', () => {
  test('avatar.css styles every class and modifier', () => {
    const classes = [...Object.values(spec.parts).map((part) => part.class), ...Object.keys(spec.modifiers)]
    assert.deepEqual(
      classes.filter((name) => !css.includes(`.${name}`)),
      []
    )
  })

  test('avatar.css sets every custom property', () => {
    const names = Object.values(spec.customProperties).flatMap(Object.keys)
    assert.deepEqual(
      names.filter((name) => !css.includes(`${name}:`)),
      []
    )
  })

  test('lists every local variable avatar.css declares', () => {
    const listed = new Set(Object.values(spec.customProperties).flatMap(Object.keys))
    const declared = new Set([...css.matchAll(/(--op-avatar[\w-]*):/g)].map((match) => match[1]))
    assert.deepEqual(
      [...declared].filter((name) => !listed.has(name)),
      []
    )
  })
})

describe('avatar.css', () => {
  test('has no magic numbers or colors: every value is a token, 0, 100%, or -1 in calc()', () => {
    const values = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/--[\w-]+/g, '')
    const literals = [...values.matchAll(/#[0-9a-f]{3,8}\b|-?\d*\.?\d+[a-z%]*/gi)].map((match) => match[0])
    assert.deepEqual(
      literals.filter((literal) => !['0', '100%', '-1'].includes(literal)),
      []
    )
  })
})
