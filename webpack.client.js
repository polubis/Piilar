const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getBaseConfig = require('./webpack.base');

module.exports = (_, { mode }) => {
  const [dev, prod] = ['development', 'production'];

  const baseConfig = getBaseConfig(mode);

  const config = {
    name: 'client',

    devtool: mode === prod ? false : 'inline-source-map',

    target: 'web',

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
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()]
  };

  if (mode === prod) {
    config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];
  }

  return config;
};
