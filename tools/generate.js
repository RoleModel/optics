const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  {
    option: 'Create Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component/',
    },
    stringReplacers: [{ question: 'Insert Component name', slot: '??name??' }],
    output: {
      path: './src/stories/??name??(pascalCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: false,
    },
  },
])
