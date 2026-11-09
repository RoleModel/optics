// Checks that react/registry.json lists every component file with the dependencies its imports need.
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const { describe, test } = require('node:test')

const REACT = path.join(__dirname, '../../react')
const BASE_URL = 'https://docs.optics.rolemodel.design/r'
const registry = JSON.parse(fs.readFileSync(path.join(REACT, 'registry.json'), 'utf8'))

const sourceFiles = ['ui', 'lib'].flatMap((dir) =>
  fs
    .readdirSync(path.join(REACT, 'registry/optics', dir))
    .filter((file) => /\.tsx?$/.test(file))
    .map((file) => `registry/optics/${dir}/${file}`)
)

describe('react/registry.json', () => {
  test('has one item per source file', () => {
    const listed = registry.items.map((item) => item.files[0].path).sort()
    assert.deepStrictEqual(listed, [...sourceFiles].sort())
  })

  for (const item of registry.items) {
    describe(item.name, () => {
      const code = item.files
        .filter((file) => /\.tsx?$/.test(file.path))
        .map((file) => fs.readFileSync(path.join(REACT, file.path), 'utf8'))
        .join('\n')

      test('lists every file it imports from the registry', () => {
        const imported = [...code.matchAll(/'@\/registry\/optics\/(?:ui|lib)\/([\w-]+)'/g)].map(
          (match) => `${BASE_URL}/${match[1]}.json`
        )
        assert.deepStrictEqual([...(item.registryDependencies ?? [])].sort(), [...new Set(imported)].sort())
      })

      test('lists every package it imports', () => {
        for (const pkg of ['@base-ui/react', 'class-variance-authority']) {
          assert.strictEqual((item.dependencies ?? []).includes(pkg), code.includes(`'${pkg}`), pkg)
        }
      })
    })
  }
})

describe('Optics version', () => {
  for (const file of sourceFiles.filter((file) => file.startsWith('registry/optics/ui/'))) {
    const name = path.basename(file, '.tsx')

    test(`${name} states it on line 1 and on its docs page`, () => {
      const firstLine = fs.readFileSync(path.join(REACT, file), 'utf8').split('\n')[0]
      const version = firstLine.match(/^\/\/ Optics version: (\d+\.\d+\.\d+)$/)?.[1]
      assert.ok(version, `${file} line 1 must be "// Optics version: X.Y.Z"`)

      const docs = fs.readFileSync(path.join(REACT, 'stories', `${name}.mdx`), 'utf8')
      assert.ok(
        docs.includes(`**Optics version:** ${version}\n`),
        `stories/${name}.mdx must say **Optics version:** ${version}`
      )
    })
  }
})
