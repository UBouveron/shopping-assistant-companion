var merge = require('webpack-merge');

var base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
});