// Returns the index of the ")" that closes the "(" at openIndex, or -1 if it is never closed.
function findClosingParen(text, openIndex) {
  let depth = 0
  for (let index = openIndex; index < text.length; index++) {
    if (text[index] === '(') depth++
    else if (text[index] === ')' && --depth === 0) return index
  }
  return -1
}

// Splits at the first comma outside parentheses: "a, b(c, d), e" -> ["a", " b(c, d), e"].
function splitAtFirstComma(text) {
  let depth = 0
  for (let index = 0; index < text.length; index++) {
    const char = text[index]
    if (char === '(') depth++
    else if (char === ')') depth--
    else if (char === ',' && depth === 0) return [text.slice(0, index), text.slice(index + 1)]
  }
  return [text]
}

module.exports = { findClosingParen, splitAtFirstComma }
