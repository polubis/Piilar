const path = require("path");

module.exports = {
  target: "node",

  mode: process.env.mode || 'development',

  entry: ["./src/client.js"],

  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  }
};
