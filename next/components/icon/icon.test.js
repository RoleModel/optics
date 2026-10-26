import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { beforeEach, describe, test } from 'node:test'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM()
Object.assign(globalThis, {
  document: window.document,
  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  CustomEvent: window.CustomEvent,
})
await import('./icon.js')
const { ICON_PACKS, iconGlyph, iconPack, setIconPack } = await import('./glyph.js')

const spec = JSON.parse(readFileSync(new URL('./icon.spec.json', import.meta.url)))
const css = readFileSync(new URL('./icon.css', import.meta.url), 'utf8')

const icon = () => document.querySelector('op-icon')

async function render(markup) {
  document.body.innerHTML = markup
  await icon().updateComplete
}

describe('<op-icon>', () => {
  beforeEach(() => render('<op-icon name="settings" size="large" weight="bold" emphasis="low" filled></op-icon>'))

  test('gives the icon its BEM classes and modifiers', async () => {
    assert.ok(icon().matches('.icon.icon--large.icon--weight-bold.icon--low-emphasis.icon--filled'))

    Object.assign(icon(), { size: 'small', weight: undefined, emphasis: 'high', filled: false })
    await icon().updateComplete
    assert.ok(icon().matches('.icon--small.icon--high-emphasis'))
    assert.ok(icon().matches(':not(.icon--large, [class*="icon--weight"], .icon--low-emphasis, .icon--filled)'))
  })

  test('has no modifiers when it has no attributes', async () => {
    await render('<op-icon name="settings"></op-icon>')
    icon().requestUpdate()
    await icon().updateComplete
    assert.equal(icon().className, 'icon')
  })

  test('writes the name as its text', async () => {
    assert.equal(icon().textContent, 'settings')

    icon().name = 'home'
    await icon().updateComplete
    assert.equal(icon().textContent, 'home')
  })

  test('keeps an SVG child when it has no name', async () => {
    await render('<op-icon><svg viewBox="0 0 24 24"></svg></op-icon>')
    assert.ok(icon().querySelector('svg'))
  })

  test('is hidden from screen readers without a label', () => {
    assert.equal(icon().getAttribute('aria-hidden'), 'true')
    assert.equal(icon().getAttribute('role'), null)
  })

  test('is an image with a label', async () => {
    icon().label = 'Settings'
    await icon().updateComplete
    assert.equal(icon().getAttribute('role'), 'img')
    assert.equal(icon().getAttribute('aria-label'), 'Settings')
    assert.equal(icon().getAttribute('aria-hidden'), null)
  })
})

// Renders with the app's pack set, as an app does at startup, then restores the default.
async function renderWithPack(pack, markup) {
  setIconPack(pack)
  try {
    await render(markup)
  } finally {
    setIconPack('material-symbols')
  }
}

describe('<op-icon> in other packs', () => {
  test('uses the pack classes and no text', async () => {
    await renderWithPack('lucide', '<op-icon name="banana" size="large"></op-icon>')
    assert.ok(icon().matches('.icon.icon--large.li.li-banana'))
    assert.equal(icon().textContent, '')
  })

  test('swaps the pack classes when the name changes', async () => {
    setIconPack('phosphor')
    try {
      await render('<op-icon name="smiley"></op-icon>')
      icon().name = 'house'
      await icon().updateComplete
      assert.ok(icon().matches('.ph.ph-house:not(.ph-smiley)'))
    } finally {
      setIconPack('material-symbols')
    }
  })

  test('uses the Phosphor class for each style', async () => {
    const styles = {
      '': 'ph',
      'weight="thin"': 'ph-thin',
      'weight="light"': 'ph-light',
      'weight="semi-bold"': 'ph',
      'weight="bold"': 'ph-bold',
      filled: 'ph-fill',
      duotone: 'ph-duotone',
      'filled duotone': 'ph-duotone',
    }
    for (const [attributes, style] of Object.entries(styles)) {
      await renderWithPack('phosphor', `<op-icon name="smiley" ${attributes}></op-icon>`)
      const others = ['ph', 'ph-thin', 'ph-light', 'ph-bold', 'ph-fill', 'ph-duotone'].filter((name) => name !== style)
      assert.ok(icon().matches(`.${style}.ph-smiley:not(.${others.join(', .')})`), attributes)
    }
  })

  test('uses the separate filled name for a filled Tabler icon', async () => {
    await renderWithPack('tabler', '<op-icon name="heart" filled></op-icon>')
    assert.ok(icon().matches('.icon--filled.ti.ti-heart-filled:not(.ti-heart)'))
  })
})

describe('icon packs', () => {
  test('defaults to Material Symbols', () => {
    assert.equal(iconPack(), 'material-symbols')
    assert.deepEqual(iconGlyph({ name: 'home' }), { text: 'home', classes: [] })
  })

  test('every pack has a CSS file in packs/', () => {
    assert.deepEqual(
      ICON_PACKS.filter((pack) => !existsSync(new URL(`./packs/${pack}.css`, import.meta.url))),
      []
    )
  })

  test('every Phosphor style has its own CSS file', () => {
    const styles = ['thin', 'light', 'bold', 'fill', 'duotone']
    assert.deepEqual(
      styles.filter((style) => !existsSync(new URL(`./packs/phosphor-${style}.css`, import.meta.url))),
      []
    )
  })

  test('the spec describes every pack', () => {
    assert.deepEqual(
      ICON_PACKS.filter((pack) => !spec.parts.Root.props.name.includes(`${pack}:`)),
      []
    )
  })

  test('an unknown pack throws', () => {
    assert.throws(() => setIconPack('fontawesome'), /Unknown icon pack "fontawesome"/)
    assert.equal(iconPack(), 'material-symbols')
  })
})

describe('icon.spec.json', () => {
  test('icon.css styles every class and modifier', () => {
    const classes = [...Object.values(spec.parts).map((part) => part.class), ...Object.keys(spec.modifiers)]
    assert.deepEqual(
      classes.filter((name) => !css.includes(`.${name}`)),
      []
    )
  })

  test('icon.css sets every custom property', () => {
    const names = Object.values(spec.customProperties).flatMap(Object.keys)
    assert.deepEqual(
      names.filter((name) => !css.includes(`${name}:`)),
      []
    )
  })

  test('lists every local variable icon.css declares', () => {
    const listed = new Set(Object.values(spec.customProperties).flatMap(Object.keys))
    const declared = new Set([...css.matchAll(/(--op-icon[\w-]*):/g)].map((match) => match[1]))
    assert.deepEqual(
      [...declared].filter((name) => !listed.has(name)),
      []
    )
  })
})

describe('icon.css', () => {
  // Font axes and SVG stroke widths are unitless numbers that have no Optics tokens.
  const UNITLESS = /--op-icon-(fill|grade|optical-size|stroke-width):[^;]+;/g

  test('has no magic numbers or colors outside font axes and stroke widths', () => {
    const values = css
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(UNITLESS, '')
      .replace(/--[\w-]+/g, '')
    const literals = [...values.matchAll(/#[0-9a-f]{3,8}\b|-?\d*\.?\d+[a-z%]*/gi)].map((match) => match[0])
    assert.deepEqual(
      literals.filter((literal) => !['0', '100%'].includes(literal)),
      []
    )
  })
})
