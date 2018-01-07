const merge = require('webpack-merge');
const path = require('path');
const parts = require('./webpack.parts');

const config = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'index.js'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
};

const serverConfig = merge(config, parts.babelLoader());
console.log(serverConfig);

module.exports = serverConfig;
