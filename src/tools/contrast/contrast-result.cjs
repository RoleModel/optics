// One pair measured in one mode.
class ContrastResult {
  constructor(pair, mode, ratio, minimum) {
    this.pair = pair
    this.mode = mode
    this.ratio = ratio
    this.minimum = minimum
  }

  get passes() {
    return this.ratio >= this.minimum
  }
}

module.exports = ContrastResult
