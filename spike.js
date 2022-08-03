const fs = require('fs')
const variables = {}

try {
  const baseDirectory = './src/core/tokens'
  const targetFile = './docs/test_structure.json'

  fs.readdir(baseDirectory, (_errors, files) => {
    files.filter((fileName) => fileName !== 'dark_mode_tokens.scss').forEach((fileName) => {
      const fileContents = fs.readFileSync(`${baseDirectory}/${fileName}`)
      const matches = fileContents.toString().match(/^\s*--.*?(?=;)/gm)
      matches.forEach((match) => {
        const [key, value] = match.split(':')
        variables[key.trim()] = value.trim()
      })
    })
    console.log('now variables is', variables)
    fs.writeFileSync(targetFile, JSON.stringify(variables))
  })

} catch(err) {
  console.log(err)
}
