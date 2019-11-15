const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    bundle: [
      './static/javascript/customizer.js',
      './static/javascript/navigation.js',
      './static/styles/_main.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, '.'),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                path: path.resolve(__dirname, '.'),
              },
            },
          }
        ]
      },
    ]
  }
}
