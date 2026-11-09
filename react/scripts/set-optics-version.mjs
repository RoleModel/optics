// Sets the Optics version on line 1 of every component and on its MDX page to the root package.json version.
import fs from 'node:fs'
import path from 'node:path'

const REACT = path.join(import.meta.dirname, '..')
const { version } = JSON.parse(fs.readFileSync(path.join(REACT, '../package.json'), 'utf8'))
const uiDir = path.join(REACT, 'registry/optics/ui')

for (const file of fs.readdirSync(uiDir).filter((file) => file.endsWith('.tsx'))) {
  const name = path.basename(file, '.tsx')
  const replace = (filePath, pattern, text) => {
    const content = fs.readFileSync(filePath, 'utf8')
    if (!pattern.test(content)) throw new Error(`${filePath} has no Optics version line`)
    fs.writeFileSync(filePath, content.replace(pattern, text))
  }

  replace(path.join(uiDir, file), /^\/\/ Optics version: .*$/m, `// Optics version: ${version}`)
  replace(path.join(REACT, 'stories', `${name}.mdx`), /^\*\*Optics version:\*\* .*$/m, `**Optics version:** ${version}`)
}

console.log(`Set the Optics version to ${version}. Check each component for changes in this release.`)
