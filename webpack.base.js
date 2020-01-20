const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = mode => {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'json'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  };
};
