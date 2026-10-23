import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import prettier from 'prettier'
import { z } from 'zod'
import { SpecSchema } from '../shared/spec-schema.js'

const file = fileURLToPath(new URL('../spec.schema.json', import.meta.url))
const json = JSON.stringify(z.toJSONSchema(SpecSchema))
const config = await prettier.resolveConfig(file)

writeFileSync(file, await prettier.format(json, { ...config, filepath: file }))
console.log(`Wrote ${file}`)
