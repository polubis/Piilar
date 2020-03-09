const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const getBaseConfig = require('./webpack.base');

module.exports = (_, { mode }) => {
  const [dev, prod] = ['development', 'production'];
  const isProd = mode === prod;

  const baseConfig = getBaseConfig(mode);

  const config = {
    devtool: isProd ? false : 'inline-source-map',

    mode,

    resolve: {
      ...baseConfig.resolve,
      alias: {
        styles: path.resolve(__dirname, 'src/styles')
      }
    },

    entry: ['./src/client.tsx'],

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build/public'),
      publicPath: '/build/public'
    },

    module: {
      rules: [
        ...baseConfig.module.rules,
        // css-loader - interprets import css from './filename.css'
        // style-loader - allows insert css into <style></style> in DOM
        // MiniCssExtractPlugin - creates separate file from <style> tag
        // sass-loader - converts scss to css

        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    },

    optimization: {
      // SplitChunksPlugin
      // Creates separate chunks for our vendor
      splitChunks: {
        chunks: 'all',
        name: 'vendor'
      }
    },

    // Cleans build folder
    // Extracts css into separate files from js - adds source maps
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()]
  };

  if (isProd) {
    config.plugins = [
      ...config.plugins,
      // brotli requires node 11.6 +
      // new BundleAnalyzerPlugin(),
      // https://github.com/webpack-contrib/compression-webpack-plugin
      new CompressionWebpackPlugin({
        filename: '[path].br',
        algorithm: 'brotliCompress',
        test: /\.(js)$/,
        threshold: 10240, // Only files bigger than this size will be processed
        minRatio: 0.8, // Only assets that compress better than this ratio are processed,
        deleteOriginalAssets: true // comment this and rebuild if want use BundleAnalyzerPlugin
      })
    ];
  }

  return config;
};
