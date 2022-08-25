const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");
const path = require("path")

module.exports = merge(base, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "eslint-loader",
          options: {
            enforce: "pre", // 定义为前置loader，在normal的loader前执行
          },
        },
      },
      {
        test: /\.js$/, // enforce 默认为 normal 普通loader
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 把es6转成es5
            plugins: ["@babel/plugin-transform-runtime"], //作用？
          },
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
    ],
  },
});
