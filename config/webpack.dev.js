var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin');

var PATHS = require('./paths.js');
var base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: '/',
    port: 5000,
    compress: false,
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackReloadPlugin()
  ]
});