import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { describe, test } from 'node:test'
import { z } from 'zod'
import { SpecSchema } from './spec-schema.js'

const components = new URL('../components/', import.meta.url)
// *.current.spec.json files describe today's Optics, which the new structure replaces.
const specFiles = readdirSync(components, { recursive: true }).filter(
  (file) => file.endsWith('.spec.json') && !file.endsWith('.current.spec.json')
)
const read = (url) => JSON.parse(readFileSync(url, 'utf8'))

const VALID = {
  name: 'demo',
  description: 'A demo.',
  parts: { Root: { react: 'Demo.Root', webComponent: 'op-demo', class: 'demo', props: {} } },
  modifiers: { 'demo--small': 'Smaller' },
  customProperties: { demo: { '--op-demo-gap': 'Gap' } },
}

const messages = (spec) => SpecSchema.safeParse(spec).error?.issues.map((issue) => issue.message) ?? []

describe('spec files', () => {
  test('finds the spec files', () => {
    assert.ok(specFiles.length > 0)
  })

  for (const file of specFiles) {
    test(`${file} matches the schema`, () => {
      const result = SpecSchema.safeParse(read(new URL(file, components)))
      assert.ok(result.success, result.error && z.prettifyError(result.error))
    })
  }
})

describe('SpecSchema', () => {
  test('accepts a valid spec', () => {
    assert.deepEqual(messages(VALID), [])
  })

  test('rejects unknown keys, to catch typos', () => {
    assert.equal(messages({ ...VALID, modifier: {} }).length, 1)
  })

  test('rejects a modifier of a class no part has', () => {
    assert.deepEqual(messages({ ...VALID, modifiers: { 'other--small': 'Smaller' } }), [
      'Modifies other, which no part has as its class',
    ])
  })

  test('rejects custom properties on a class no part has', () => {
    assert.deepEqual(messages({ ...VALID, customProperties: { demo__item: { '--op-demo-item-gap': 'Gap' } } }), [
      'No part has this class',
    ])
  })

  test('rejects a custom property without the component prefix', () => {
    assert.deepEqual(messages({ ...VALID, customProperties: { demo: { '--op-other-gap': 'Gap' } } }), [
      'Must start with --op-demo-',
    ])
  })

  test('rejects the old --_op- prefix', () => {
    assert.equal(messages({ ...VALID, customProperties: { demo: { '--_op-demo-gap': 'Gap' } } }).length, 1)
  })

  test('rejects a part class outside the block', () => {
    const parts = { Root: { ...VALID.parts.Root, class: 'demo-group' } }
    assert.deepEqual(messages({ ...VALID, parts, modifiers: {}, customProperties: {} }), [
      'Must be demo or demo__<element>',
    ])
  })

  test('requires a React and web component version of every part', () => {
    const parts = { Root: { ...VALID.parts.Root, react: null } }
    assert.equal(messages({ ...VALID, parts }).length, 1)
  })
})

describe('spec.schema.json', () => {
  test('matches SpecSchema: run `yarn next:schema` after changing it', () => {
    assert.deepEqual(read(new URL('../spec.schema.json', import.meta.url)), z.toJSONSchema(SpecSchema))
  })
})
