const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'source/app.jsx'),
  mode: process.env.NODE_ENV || 'development',
  serve: {
    content: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
};
