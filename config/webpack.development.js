const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Development config *********************/

const developmentConfig = merge([
  parts.devTools(),
  parts.devServer({ host: '0.0.0.0', port: 8080 }),
  parts.babelLoader(),
  parts.cssLoader(),
]);

module.exports = developmentConfig;
