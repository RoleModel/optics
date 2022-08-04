const fs = require('fs')

function isHyphenated(keys, length = 2) {
  return HYPHENATED_WORDS.concat(HYPHENATED_LUMINOSITIES).includes(keys.slice(0, length).join('-'))
}

const HYPHENATED_WORDS = [
  'z-index', 'neutral-variant', 'on-background',
  'line-height',
  'width-large', 'width-x-large', 'card-outline',
  'x-small', '2x-small', '3x-small', '4x-small', '5x-small',
  'x-large', '2x-large', '3x-large', '4x-large', '5x-large',
  'extra-light', 'extra-bold', 'semi-bold',
  'dialog-backdrop', 'dialog-content', 'alert-group', 'on-minus-max', 'on-minus-1', 'on-minus-2', 'on-minus-3',
  'on-plus-min', 'on-plus-max', 'on-plus-1', 'on-plus-2', 'on-plus-3', 'on-hover', 'on-base', 'letter-spacing', 'scale-unit',
  'plus-1', 'plus-2', 'plus-3', 'plus-max', 'minus-1', 'minus-2', 'minus-3', 'minus-max', 'input-height'
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
    [currentKey, remainingKeys] = [keys.slice(0, 2).join('-'), keys.slice(2)]
  } else if (isHyphenated(keys, 3)) {
    [currentKey, remainingKeys] = [keys.join('-'), keys.slice(3)]
  } else {
    [currentKey, ...remainingKeys] = keys
  }

  data[currentKey] = data[currentKey] ?? {}

  switch (remainingKeys.length) {
    case 0:
      data[currentKey] = value
      break;
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
  const tokenDirectory = './src/core/tokens'
  const targetDirectory = './dist/tokens'

  if(!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true })
  }

  fs.readdir(tokenDirectory, (_errors, files) => {
    let variables = {}
    files.filter((fileName) => fileName !== 'dark_mode_tokens.scss').forEach((fileName) => {
      const fileContents = fs.readFileSync(`${tokenDirectory}/${fileName}`)
      const matches = fileContents.toString().match(/^\s*--.*?(?=;)/gm)
      matches.forEach((match) => {
        const [key, value] = match.split(':')
        variables = addToJson(splitKey(key.trim()), variables, value.trim())
      })
    })
    fs.writeFileSync(`${targetDirectory}/tokens.json`, JSON.stringify(variables))
  })

} catch(err) {
  console.log(err)
}
