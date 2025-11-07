import webpack from 'webpack';
import path from 'path';
const buildPath = path.resolve(__dirname, 'assets');
import fs from 'fs';

const commonLoaders = [
  {
    test: /\.js$/,

    loaders: [
      'react-hot',
      'babel-loader'
      //, 'jsx-loader'
    ]
  }
];

module.exports = {
  // Makes sure errors in console map to the correct file and line number
  name: 'browser',
  devtool: 'eval',
  entry: [
    // '.bin/www.js'
    './app/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081' // WebpackDevServer host and port
  ],
  output: {
    path: buildPath
    // filename:
  }
};
