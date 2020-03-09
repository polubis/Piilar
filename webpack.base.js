const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// Pretty inports - can be defined in tsconfig

module.exports = mode => {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'json'],
      // Allows to import MyFile from './myFile' without .extension
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
          // Starts from entry point, loads all ts, tsx files and creating bundle.js
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
          // Takes new js syntax and compiles to supported
        }
      ]
    }
  };
};
