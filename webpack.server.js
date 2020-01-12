const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  name: "server",
  target: "node",

  mode: process.env.mode || "development",

  entry: ["@babel/polyfill", "./src/server.tsx"],

  resolve: {
    extensions: [".ts", ".tsx", ".js", "json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build"
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.scss$/, loader: "ignore-loader" }
    ]
  },

  externals: [webpackNodeExternals()]
};
