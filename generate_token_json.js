const fs = require('fs')
const { join } = require('path')

function  isHyphenated(keys, length = 2) {
  return HYPHENATED_WORDS.includes(keys.slice(0, length).join('-'))
}

const HYPHENATED_WORDS = [
  'z-index', 'neutral-variant', 'on-background',
  'line-height',
  'width-large', 'width-x-large', 'card-outline',
  'x-small', '2x-small', '3x-small', '4x-small', '5x-small',
  'x-large', '2x-large', '3x-large', '4x-large', '5x-large',
  'extra-light', 'extra-bold', 'semi-bold',
  'dialog-backdrop', 'dialog-content', 'alert-group', 'minus-max', 'minus-1', 'minus-2', 'minus-3',
  'plus-min', 'plus-max', 'plus-1', 'plus-2', 'plus-3', 'hover', 'base'
]

function splitKey(key) {
  let keys = key.slice(2).split('-')
  return keys
}

function isLuminosityKey(keys) {
  const luminosityKeys = [...Array(101).keys()].map((luminosity) => `luminosity-${luminosity}`)
  return luminosityKeys.includes(keys.join('-'))
}

function addToJson(keys, data, value) {
  let currentKey, remainingKeys

  if (isHyphenated(keys, 2) || isLuminosityKey(keys)) {
    [currentKey, remainingKeys] = [keys.join('-'), keys.slice(2)]
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
  const baseDirectory = './src/core/tokens'
  const targetFile = './docs/test_structure.json'

  fs.readdir(baseDirectory, (_errors, files) => {
    let variables = {}
    files.filter((fileName) => fileName !== 'dark_mode_tokens.scss').forEach((fileName) => {
      const fileContents = fs.readFileSync(`${baseDirectory}/${fileName}`)
      const matches = fileContents.toString().match(/^\s*--.*?(?=;)/gm)
      matches.forEach((match) => {
        const [key, value] = match.split(':')
        variables = addToJson(splitKey(key.trim()), variables, value.trim())
      })
    })
    fs.writeFileSync(targetFile, JSON.stringify(variables))
  })

} catch(err) {
  console.log(err)
}
