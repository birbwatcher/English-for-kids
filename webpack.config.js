const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [
        MiniCss.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
  plugins: [
    new MiniCss({
      filename: 'style.css',
    }),
  ],
};
