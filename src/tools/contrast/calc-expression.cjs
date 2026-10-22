const CheckError = require('./check-error.cjs')

// calc() with only numbers and operators inside. No parentheses, so the innermost calc() matches first.
const PLAIN_CALC = /calc\(([\d.\s*/+-]+)\)/g
const TOKEN = /\d+\.?\d*|\.\d+|\S/g

// One calc() of plain numbers. Evaluates + - * / with the usual precedence, and leading + or - signs.
class CalcExpression {
  #source
  #tokens
  #position = 0

  // Replaces each calc() of plain numbers with its result, innermost first, until none are left.
  static resolveAll(value) {
    let resolved = value
    let previous
    do {
      previous = resolved
      resolved = resolved.replace(PLAIN_CALC, (source, math) => String(new CalcExpression(source, math).evaluate()))
    } while (resolved !== previous)
    return resolved
  }

  constructor(source, math) {
    this.#source = source
    this.#tokens = math.match(TOKEN) ?? []
  }

  evaluate() {
    const result = this.#sum()
    return this.#position === this.#tokens.length ? result : this.#fail()
  }

  #sum() {
    let result = this.#product()
    while (this.#next === '+' || this.#next === '-')
      result = this.#take() === '+' ? result + this.#product() : result - this.#product()
    return result
  }

  #product() {
    let result = this.#signed()
    while (this.#next === '*' || this.#next === '/')
      result = this.#take() === '*' ? result * this.#signed() : result / this.#signed()
    return result
  }

  #signed() {
    const token = this.#take()
    if (token === '+') return this.#signed()
    if (token === '-') return -this.#signed()
    return /\d/.test(token ?? '') ? Number(token) : this.#fail()
  }

  get #next() {
    return this.#tokens[this.#position]
  }

  #take() {
    return this.#tokens[this.#position++]
  }

  #fail() {
    throw new CheckError(`Can't calculate: ${this.#source}`)
  }
}

module.exports = CalcExpression
