// Sets the Optics version everywhere a version bump needs it: package.json, the CDN links in the
// .storybook/assets example pages, and line 1 and the MDX page of every React component.
//
//   yarn set-optics-version 2.6.2
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.join(import.meta.dirname, '..')
const version = process.argv[2]

if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version ?? '')) {
  console.error('Usage: yarn set-optics-version <version>, such as 2.6.2')
  process.exit(1)
}

const replace = (file, pattern, text) => {
  const filePath = path.join(ROOT, file)
  const content = fs.readFileSync(filePath, 'utf8')
  if (!pattern.test(content)) throw new Error(`${file} has no Optics version to replace`)
  fs.writeFileSync(filePath, content.replace(pattern, text))
}

replace('package.json', /^ {2}"version": ".*",$/m, `  "version": "${version}",`)

const assets = '.storybook/assets'
for (const file of fs.readdirSync(path.join(ROOT, assets)).filter((file) => file.endsWith('.html'))) {
  replace(`${assets}/${file}`, /@rolemodel\/optics@[^/]+\//g, `@rolemodel/optics@${version}/`)
}

const ui = 'react/registry/optics/ui'
for (const file of fs.readdirSync(path.join(ROOT, ui)).filter((file) => file.endsWith('.tsx'))) {
  replace(`${ui}/${file}`, /^\/\/ Optics version: .*$/m, `// Optics version: ${version}`)
  replace(
    `react/stories/${path.basename(file, '.tsx')}.mdx`,
    /^\*\*Optics version:\*\* .*$/m,
    `**Optics version:** ${version}`
  )
}

console.log(`Set the Optics version to ${version}. Check each React component for changes in this release.`)
