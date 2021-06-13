const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    entry: './app.jsx',
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
          }, 
          
          {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader'
          }, 
          {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "images/[name].[hash].[ext]"
              }
            }
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        })
      ],
};