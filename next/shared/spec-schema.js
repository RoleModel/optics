import { z } from 'zod'

// The shape of every next/components/*/*.spec.json. Run `yarn next:schema` after a change
// to regenerate spec.schema.json, the JSON Schema that editors read through "$schema".
//
// It describes only the new structure: every part has a React and web component version,
// classes are the block or block__element, and variables are --op-<name>-*.

const NAME = /^[a-z][a-z0-9-]*$/
const BLOCK_OR_ELEMENT = /^[a-z][a-z0-9-]*(__[a-z][a-z0-9-]*)?$/
const MODIFIER = /^[a-z][a-z0-9-]*(__[a-z][a-z0-9-]*)?--[a-z][a-z0-9-]*$/
const CUSTOM_PROPERTY = /^--op-[a-z0-9-]+$/
const PART = /^[A-Z][A-Za-z]*$/

const describedNames = (key, description) => z.record(key, z.string().describe(description))

const Part = z.strictObject({
  react: z.string().describe('The React component, like Tabs.Tab.'),
  webComponent: z.string().describe('The custom element, or the plain element it decorates, like op-tabs-tab.'),
  class: z.string().regex(BLOCK_OR_ELEMENT).describe('The BEM block or block__element class.'),
  role: z.string().optional().describe('The ARIA role the part gets.'),
  props: describedNames(z.string(), 'What the prop does in each version.').describe('Props and attributes, by name.'),
})

export const SpecSchema = z
  .strictObject({
    $schema: z.string().optional(),
    name: z.string().regex(NAME).describe('The component name: the BEM block, and the prefix of its variables.'),
    description: z.string().describe('What the component is, in a sentence or two.'),
    parts: z.record(z.string().regex(PART), Part).describe('The parts to compose, by PascalCase name.'),
    modifiers: describedNames(z.string().regex(MODIFIER), 'What the modifier changes.').describe(
      'BEM modifier classes.'
    ),
    customPropertiesNote: z.string().optional().describe('Anything that applies to every custom property.'),
    customProperties: z
      .record(
        z.string().regex(BLOCK_OR_ELEMENT),
        describedNames(z.string().regex(CUSTOM_PROPERTY), 'What the variable sets.')
      )
      .describe('Custom properties, grouped by the class that declares them.'),
    keyboard: describedNames(z.string(), 'What the key does.').optional().describe('Keys the component handles.'),
  })
  .superRefine((spec, context) => {
    const classes = new Set(Object.values(spec.parts).map((part) => part.class))
    const issue = (path, message) => context.addIssue({ code: 'custom', path, message })

    for (const [part, { class: className }] of Object.entries(spec.parts)) {
      if (className !== spec.name && !className.startsWith(`${spec.name}__`)) {
        issue(['parts', part, 'class'], `Must be ${spec.name} or ${spec.name}__<element>`)
      }
    }

    for (const modifier of Object.keys(spec.modifiers)) {
      const base = modifier.split('--')[0]
      if (!classes.has(base)) issue(['modifiers', modifier], `Modifies ${base}, which no part has as its class`)
    }

    for (const [className, properties] of Object.entries(spec.customProperties)) {
      if (!classes.has(className)) issue(['customProperties', className], 'No part has this class')

      for (const name of Object.keys(properties)) {
        if (!name.startsWith(`--op-${spec.name}-`)) {
          issue(['customProperties', className, name], `Must start with --op-${spec.name}-`)
        }
      }
    }
  })
