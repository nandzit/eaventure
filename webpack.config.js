const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './app.jsx',
    output: {
      filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
    
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },

          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
    
          // Second Rule
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        })
      ],

      devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
};