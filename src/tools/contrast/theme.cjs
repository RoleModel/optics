const CalcExpression = require('./calc-expression.cjs')
const CheckError = require('./check-error.cjs')
const { findClosingParen, splitAtFirstComma } = require('./css-syntax.cjs')

const VAR_NAME = /^--[\w-]+$/

// The user's theme on top of the Optics tokens: one final value per custom property, like getComputedStyle(:root).
class Theme {
  #values = new Map()
  // The @media, @supports, @container or @layer rule a property's final value was set inside, if any.
  #rules = new Map()

  // Applies the stylesheets in order. The last value wins, except a normal value can't replace an !important one, as in CSS.
  static cascade(...stylesheets) {
    const theme = new Theme()
    const important = new Set()
    for (const stylesheet of stylesheets) {
      for (const { name, value, important: isImportant, rule } of stylesheet.declarations()) {
        if (important.has(name) && !isImportant) continue
        if (isImportant) important.add(name)
        theme.#values.set(name, value)
        if (rule) theme.#rules.set(name, rule)
        else theme.#rules.delete(name)
      }
    }
    return theme
  }

  names() {
    return [...this.#values.keys()]
  }

  has(name) {
    return this.#values.has(name)
  }

  // The token's value with every var() substituted and every plain-number calc() worked out.
  resolve(name) {
    this.#assertUnscoped(name, name)
    return CalcExpression.resolveAll(this.#substituteVars(this.#values.get(name), [], name))
  }

  // Walks each var() with balanced parentheses, so fallbacks can hold their own var(),
  // and a fallback is only resolved when its variable is not defined.
  #substituteVars(value, seen, token) {
    let output = ''
    let index = 0
    for (let start; (start = value.indexOf('var(', index)) !== -1;) {
      const end = findClosingParen(value, start + 'var'.length)
      if (end === -1) throw new CheckError(`Can't resolve: ${value}`)

      const [name, fallback] = splitAtFirstComma(value.slice(start + 'var('.length, end)).map((part) => part.trim())
      output += value.slice(index, start) + this.#substituteVar(name, fallback, seen, value, token)
      index = end + 1
    }
    return output + value.slice(index)
  }

  #substituteVar(name, fallback, seen, value, token) {
    if (!VAR_NAME.test(name)) throw new CheckError(`Can't resolve: ${value}`)
    if (seen.includes(name)) throw new CheckError(`Circular reference: ${[...seen, name].join(' -> ')}`)
    if (this.#values.has(name)) {
      this.#assertUnscoped(token, name)
      return this.#substituteVars(this.#values.get(name), [...seen, name], token)
    }
    if (fallback !== undefined) return this.#substituteVars(fallback, seen, token)
    throw new CheckError(`${name} is not defined`)
  }

  // A value set inside @media, @supports or @container applies only under that condition, and one inside @layer
  // loses to any unlayered value. The cascade here follows neither, so a color that depends on one could pass a
  // theme that fails.
  #assertUnscoped(token, name) {
    const rule = this.#rules.get(name)
    if (!rule) return
    const reason = name === token ? 'it is set' : `it uses ${name}, which is set`
    const advice = /^@layer/i.test(rule)
      ? 'Layers change which value wins, so move color tokens out of @layer.'
      : 'Set mode colors with light-dark(), or check that theme in its own file.'
    throw new CheckError(`Can't check ${token}: ${reason} inside ${rule}. ${advice}`)
  }
}

module.exports = Theme
