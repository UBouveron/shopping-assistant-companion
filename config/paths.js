var path = require('path');

module.exports = {
  DIST: path.resolve(__dirname, '../dist'),
  SRC: path.resolve(__dirname, '../src'),
  APP: path.resolve(__dirname, '../src', 'app'),
  ASSETS: path.resolve(__dirname, '../src', 'assets'),
  SASS: path.resolve(__dirname, '../src', 'assets', 'sass'),
  IMAGES: path.resolve(__dirname, '../src', 'assets', 'images'),
};
