const path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'app/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
      rules: [
          {
            test: /\.scss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
              ],
          },
          {
            test: /\.html$/i,
            use: ['html-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options:{
                  name: "[name].[hash].[ext]",
                  outputPath: "img/",
                  publicPath: '../img/'
                },
              },
            ],
          },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
          template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "styles/main.css"
        })
      ],
};