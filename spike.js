const fs = require('fs')

try {
  const baseDirectory = './src/core/tokens'
  const targetFile = './docs/test_structure.json'

  fs.writeFileSync(targetFile, '{')

  fs.readdir(baseDirectory, (_errors, files) => {
    files.filter((fileName) => fileName !== 'dark_mode_tokens.scss').forEach((fileName) => {
      const fileContents = fs.readFileSync(`${baseDirectory}/${fileName}`)
      const matches = fileContents.toString().match(/^\s*--.*?(?=;)/gm)
      console.log('number of matches for', fileName, matches?.length || 0)
      matches.forEach((match) => {
        const [key, value] = match.split(':')
        fs.writeFileSync(targetFile, `"${key.trim().slice(5)}": "${value.trim()}",`, {flag: 'a+'})
      })
    })
    fs.writeFileSync(targetFile, '}', {flag: 'a+'})
  })



} catch(err) {
  console.log(err)
}
