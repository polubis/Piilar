const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const getBaseConfig = require('./webpack.base');

module.exports = (_, { mode }) => {
  const baseConfig = getBaseConfig(mode);

  return {
    name: 'server',

    target: 'node',

    mode,

    entry: ['@babel/polyfill', './src/server.tsx'],

    resolve: baseConfig.resolve,

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build'
    },

    module: {
      rules: [...baseConfig.module.rules, { test: /\.scss$/, loader: 'ignore-loader' }]
    },

    externals: [webpackNodeExternals()]
  };
};
