const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.php'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : []
  ]
}
