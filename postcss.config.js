module.exports = (context) => ({
  plugins: {
    'postcss-import': {},
    cssnano:
      context.env === 'minify'
        ? {
            preset: [
              'default',
              { colormin: false }, // Disable the postcss-colormin plugin
            ],
          }
        : false,
  },
})
