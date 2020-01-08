# Piilar


```js

{ 
  "presets": ["@babel/preset-env", "@babel/preset-react"] // can be placed also in package.json as "babel": {}
  // preset is couple of plugins which supports language feature
  // plugins allows to support language feature - default is es2015 and react,
  "plugins": ["@babel/plugin-proposal-class-properties"] // allows to use new class features
}

```

```js

const path = require("path");
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node", // tells WP we are working with node - so WP should use only things dedicated for node

  entry: ["@babel/polyfill", "./server.js"], // WP starting building chunks based on this file also adds polyfill in this file - allows to use new js syntax

  output: {
    filename: "bundle.js", // WP create this file after building process
    path: path.resolve(__dirname, "build"), // current directory / build folder
    publicPath: "/build" // tells WP where we will host generated bundle
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  },

  externals: [webpackNodeExternals()]
};

```

```json

{
  "name": "piilar",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev:server": "webpack --config webpack.server.js --watch", // building application based on webpack configuration
    "dev:start": "nodemon --watch build --exec node build/bundle.js", // tracking changes in build directory if detects running bundle.js file
    "dev": "npm-run-all --parallel dev:*" // allows to run all webpack prefixed scripts parallel in one CLI
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/polubis/Piilar.git"
  },
  "author": "Adrian Połubiński",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/polubis/Piilar/issues"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.7.7",
    "@babel/core": "^7.7.7",
    "@babel/polyfill": "^7.7.0", // bunch of objects and method which browser not support
    "@babel/preset-env": "^7.7.7",
    "@babel/preset-react": "^7.7.4",
    "babel-loader": "^8.0.6",
    "nodemon": "^2.0.2",
    "npm-run-all": "^4.1.5",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-node-externals": "^1.7.2"
  }
}


```