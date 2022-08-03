const fs = require('fs')

try {
  const baseDirectory = './src/core/tokens'
  const targetFile = './docs/test_structure.json'

  fs.writeFileSync(targetFile, '')

  fs.readdir(baseDirectory, (_errors, files) => {
    files.forEach((fileName) => {
      const fileContents = fs.readFileSync(`${baseDirectory}/${fileName}`)
      fs.writeFileSync(targetFile, fileContents, {flag: 'a+'})
    })
  })

} catch(err) {
  console.log(err)
}
