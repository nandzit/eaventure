const webpack = require('webpack');
const path = require('path')
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = merge( common, {
    mode: 'production',
    output: {
      filename: 'main.[hash].js',
      path: path.resolve(__dirname, "./production")
    },

});