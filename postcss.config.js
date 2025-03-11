module.exports = (context) => ({
  plugins: {
    'postcss-import': {},
    cssnano: context.env === 'minify' ? {} : false,
  },
})
