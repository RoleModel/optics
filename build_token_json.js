const fs = require('fs')
const path = require('node:path')

function isHyphenated(keys, length = 2) {
  return HYPHENATED_WORDS.concat(HYPHENATED_LUMINOSITIES).includes(keys.slice(0, length).join('-'))
}

const HYPHENATED_WORDS = [
  'z-index',
  'neutral-variant',
  'on-background',
  'line-height',
  'letter-spacing',
  'scale-unit',
  'input-height',
  'width-large',
  'width-x-large',
  'card-outline',
  'x-small',
  '2x-small',
  '3x-small',
  '4x-small',
  '5x-small',
  'x-large',
  '2x-large',
  '3x-large',
  '4x-large',
  '5x-large',
  'extra-light',
  'extra-bold',
  'semi-bold',
  'dialog-backdrop',
  'dialog-content',
  'alert-group',
  'on-minus-one',
  'on-minus-two',
  'on-minus-three',
  'on-minus-four',
  'on-minus-five',
  'on-minus-six',
  'on-minus-seven',
  'on-minus-eight',
  'on-minus-max',
  'on-plus-one',
  'on-plus-two',
  'on-plus-three',
  'on-plus-four',
  'on-plus-five',
  'on-plus-six',
  'on-plus-seven',
  'on-plus-eight',
  'on-plus-max',
  'minus-one',
  'minus-two',
  'minus-three',
  'minus-four',
  'minus-five',
  'minus-six',
  'minus-seven',
  'minus-eight',
  'minus-max',
  'plus-one',
  'plus-two',
  'plus-three',
  'plus-four',
  'plus-five',
  'plus-six',
  'plus-seven',
  'plus-eight',
  'plus-max',
  'on-base',
]

// This is used in the isHyphenated method so that any key of luminosity-x returns true.
const HYPHENATED_LUMINOSITIES = [...Array(101).keys()].map((luminosity) => `luminosity-${luminosity}`)

function splitKey(key) {
  let keys = key.slice(2).split('-')
  return keys
}

function addToJson(keys, data, value) {
  let currentKey, remainingKeys

  if (isHyphenated(keys, 2)) {
    ;[currentKey, remainingKeys] = [keys.slice(0, 2).join('-'), keys.slice(2)]
  } else if (isHyphenated(keys, 3)) {
    ;[currentKey, remainingKeys] = [keys.join('-'), keys.slice(3)]
  } else {
    ;[currentKey, ...remainingKeys] = keys
  }

  data[currentKey] = data[currentKey] ?? {}

  switch (remainingKeys.length) {
    case 0:
      data[currentKey] = value
      break
    case 1:
      data[currentKey][remainingKeys[0]] = value
      break
    default:
      data[currentKey] = addToJson(remainingKeys, data[currentKey], value)
      break
  }

  return data
}

try {
  const arguments = {}
  process.argv.forEach((argument) => {
    const values = argument.slice(2).split('=')
    if (values.length === 2) {
      arguments[values[0]] = values[1]
    }
  })

  const source = arguments['source'] || 'src/core/tokens'
  const output = arguments['output'] || './dist/tokens'
  const outputPath = path.dirname(output)
  const outputFile = path.basename(output)

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
  }

  fs.readdir(source, { withFileTypes: true }, (_errors, files) => {
    let variables = {}
    files
      .filter((directoryEntry) => directoryEntry.isFile() && directoryEntry.name !== 'index.css')
      .forEach((directoryEntry) => {
        const fileContents = fs.readFileSync(`${source}/${directoryEntry.name}`)
        const matches = fileContents.toString().match(/^\s*--.*?(?=;)/gm)
        matches.forEach((match) => {
          const [key, value] = match.split(':')
          variables = addToJson(splitKey(key.trim()), variables, value.trim())
        })
      })
    fs.writeFileSync(`${outputPath}/${outputFile}`, JSON.stringify(variables, null, '\t'))
  })
} catch (err) {
  console.log(err)
}
