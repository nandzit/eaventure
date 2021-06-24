const webpack = require('webpack');
const path = require('path')
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 2700;

module.exports = merge(common, {
    mode: 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dev')
    },
    devtool: 'inline-source-map',
    
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
});