const CalcExpression = require('./calc-expression.cjs')
const CheckError = require('./check-error.cjs')
const { findClosingParen, splitAtFirstComma } = require('./css-syntax.cjs')

const VAR_NAME = /^--[\w-]+$/

// The user's theme on top of the Optics tokens: one final value per custom property, like getComputedStyle(:root).
class Theme {
  #values = new Map()
  // The @media, @supports or @container rule a property's final value was set inside, if any.
  #conditions = new Map()

  // Applies the stylesheets in order. The last value wins, except a normal value can't replace an !important one, as in CSS.
  static cascade(...stylesheets) {
    const theme = new Theme()
    const important = new Set()
    for (const stylesheet of stylesheets) {
      for (const { name, value, important: isImportant, condition } of stylesheet.declarations()) {
        if (important.has(name) && !isImportant) continue
        if (isImportant) important.add(name)
        theme.#values.set(name, value)
        if (condition) theme.#conditions.set(name, condition)
        else theme.#conditions.delete(name)
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
    this.#assertUnconditional(name, name)
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
      this.#assertUnconditional(token, name)
      return this.#substituteVars(this.#values.get(name), [...seen, name], token)
    }
    if (fallback !== undefined) return this.#substituteVars(fallback, seen, token)
    throw new CheckError(`${name} is not defined`)
  }

  // A value set inside @media, @supports or @container applies only under that condition, but the cascade
  // applies it everywhere, so a color that depends on one could pass a theme that fails.
  #assertUnconditional(token, name) {
    const condition = this.#conditions.get(name)
    if (!condition) return
    const reason = name === token ? 'it is set' : `it uses ${name}, which is set`
    throw new CheckError(
      `Can't check ${token}: ${reason} inside ${condition}. Set mode colors with light-dark(), or check that theme in its own file.`
    )
  }
}

module.exports = Theme
