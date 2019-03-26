var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = require('./paths.js');
var ALIAS = require('./alias.js');

module.exports = {
  entry: [
    '@babel/polyfill',
    path.join(PATHS.APP, 'index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: PATHS.DIST,
  },
  resolve: {
    modules: ['node_modules', PATHS.SRC],
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: ALIAS,
  },
  module: {
    rules: [
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      },
      {
        test: /\.(css|s(c|a)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(PATHS.SASS, '_globals.scss'),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.SRC, 'index.html'),
      favicon: path.join(PATHS.ASSETS, 'favicon.ico'),
      filename: 'index.html',
      inject: 'body',
      hash: true,
    }),
  ]
};
