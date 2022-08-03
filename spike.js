const fs = require('fs')
console.log('hello world')

try {
  const data = fs.readFileSync('./src/core/tokens/base_tokens.scss')
  fs.writeFileSync('./docs/test_structure.json', data, {flag: 'a+'})
} catch(err) {
  console.log(err)
}
