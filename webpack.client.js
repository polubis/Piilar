const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = () => {
  const mode = process.env.mode || "development";

  const isDev = mode === "development";

  return {
    name: "client",
    target: "web",

    mode,

    resolve: {
      extensions: [".ts", ".tsx", ".js", "json"],
      alias: {
        styles: path.resolve(__dirname, 'src/styles')
      },
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    },

    entry: ["./src/client.tsx"],

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "build/public"),
      publicPath: "/build/public"
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },

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

    devtool: isDev && "inline-source-map",

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      isDev && new BundleAnalyzerPlugin()
    ]
  };
};
