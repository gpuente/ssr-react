const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Development config *********************/

const developmentConfig = merge([
  parts.devServer({ host: '0.0.0.0', port: 3050 }),
  parts.babelLoader(),
  parts.cssLoader(),
]);

module.exports = developmentConfig;
