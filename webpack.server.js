const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  name: "server",
  target: "node",

  mode: process.env.mode || "development",

  entry: ["@babel/polyfill", "./server.js"],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build"
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, loader: "ignore-loader" }
    ]
  },

  externals: [webpackNodeExternals()]
};
