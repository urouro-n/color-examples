const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: {
    main: path.join(__dirname, '../index.web.js'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
