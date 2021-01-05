const path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
      rules: [
          {
            test: /\.scss$/i,
            use: [
                //'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    // options: {
                    //     url: false
                    // } 
                }, 
                'resolve-url-loader', 
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
                  publicPath: 'img/'
                },
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
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
        new MiniCssExtractPlugin()
      ],
};