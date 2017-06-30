'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
const path = require('path');

var config = Object.create(baseConfig);
config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new HtmlWebpackPlugin({template: './example/index.html'})
];

config.entry = './example/index.jsx';

config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'example.js'
}

module.exports = config;
