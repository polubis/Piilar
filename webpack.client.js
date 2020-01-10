const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  name: "client",
  target: "web",

  mode: process.env.mode || "development",

  entry: ["./src/client.js"],

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },

  devtool: "cheap-module-source-map",

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin()
  ]
};
