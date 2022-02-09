const fs = require('fs')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const dotenv = require('dotenv');
const webpack = require("webpack")
const PROJECT_PATH = path.resolve(__dirname, "../");
const dotenvFile = path.resolve(PROJECT_PATH, `./.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: fs.existsSync(dotenvFile)
    ? dotenvFile
    : resolve(PROJECT_PATH, `./.env`),
});
console.log("【process.env】", process.env.ENV);

module.exports = env => {
  return {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        title: "yangdi's blog"
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },
  }
};