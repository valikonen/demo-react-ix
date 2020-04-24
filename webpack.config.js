// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { test: /\.txt$/,
        use: 'raw-loader'
      }
    ],
    // plugins: [
    //   new HtmlWebpackPlugin({template: './src/index.html'})
    // ]
  },
  resolve: {
    alias: {        
        'react-router-dom': path.resolve('./node_modules/react-router-dom')
    }
  }
};
