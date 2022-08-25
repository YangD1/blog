const { merge } = require('webpack-merge')
const path = require("path");
const base = require('./webpack.config.base')

module.exports = merge(base, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
    },
})
