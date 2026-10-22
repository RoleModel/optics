// Writes the results to an output stream, and decides the exit code: 1 if any pair fails, unless --report was passed.
class ContrastReporter {
  #output
  #build
  #options
  #count = 0
  #failures = []

  constructor(output, build, options) {
    this.#output = output
    this.#build = build
    this.#options = options
  }

  record(result) {
    this.#count++
    if (!result.passes) this.#failures.push(result)
    if (this.#options.report) this.#print(pairLine(result))
  }

  finish() {
    const { min, altMin, report } = this.#options
    const passed = this.#count - this.#failures.length
    this.#print(
      `Optics ${this.#build.name} contrast: ${passed}/${this.#count} pairs pass (on >= ${min}, on-alt >= ${altMin})`
    )
    if (report || !this.#failures.length) return 0

    for (const { pair, mode, ratio, minimum } of this.#failures)
      this.#print(`  ${pair.text} (${mode}): ${ratio.toFixed(2)} < ${minimum}`)
    return 1
  }

  #print(line) {
    this.#output.write(`${line}\n`)
  }
}

function pairLine({ pair, mode, ratio, passes }) {
  return `${passes ? 'pass' : 'FAIL'}  ${ratio.toFixed(2).padStart(5)}  ${mode.padEnd(5)}  ${pair.text}`
}

module.exports = ContrastReporter
