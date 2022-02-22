const fs = require("fs");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const dotenv = require("dotenv");
const webpack = require("webpack");
const PROJECT_PATH = path.resolve(__dirname, "../");
const dotenvFile = path.resolve(PROJECT_PATH, `./.env.${process.env.NODE_ENV}`);

dotenv.config({
  path: fs.existsSync(dotenvFile)
    ? dotenvFile
    : path.resolve(PROJECT_PATH, `./.env`),
});
console.log("【process.env】", process.env.ENV);

module.exports =  {
    entry: path.resolve(__dirname, '../src') + "/main.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: "style-loader", // 将 JS 字符串生成为 style 节点
            },
            {
              loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
            },
            {
              loader: "sass-loader", // 将 Sass 编译成 CSS
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.mjs$/i,
          resolve: {
            byDependency: {
              esm: {
                // ES modules（ESM） 是 JavaScript 官方的标准化模块系统。
                fullySpecified: false, // 关闭 resolve.fullySpecified
              },
            },
          },
          include: /node_modules/,
          type: "javascript/auto",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: "/node_modules/"
        },
      ],
    },
    resolve:  {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: {
        "path": require.resolve("path-browserify")
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        title: "yangdi's blog",
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  };
