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
      path: './src/stories/Components/??name??(pascalCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: false,
    },
  },
  {
    option: 'Create Overview Page',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/overview/',
    },
    stringReplacers: [{ question: 'Insert Page name', slot: '??name??' }],
    output: {
      path: './src/stories/Overview/',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
])
